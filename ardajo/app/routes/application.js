import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    if ( typeof MediaStreamTrack === "undefined" ) {
      Ember.Logger.log("MediaStreamTrack not supported");
      return [{desc: "MediaStreamTrack not found"}];
    }

    Ember.Logger.debug("MediaStreamTrack.getSources:");
    Ember.Logger.debug(MediaStreamTrack.getSources);
    if ( typeof MediaStreamTrack.getSources === "undefined" ) {
      Ember.Logger.log("MediaStreamTrack.getSources() not supported");
      return [{desc: "can't list media sources"}];
    }

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      MediaStreamTrack.getSources(function(sources) {
        Ember.Logger.log("MediaStreamTrack sources:");
        Ember.Logger.log(sources);
        
        if ( sources.length > 0 ) {
          resolve(sources);
        } else {
          reject([{desc: "didn't find media sources"}]);
        }
      }); // getSources
    }); // promise

    return promise.then(function(sources) {
        function isVideo(elem) {
          return elem && elem.kind === "video";
        }

        var videoSources = sources.filter(isVideo);

        if (videoSources.length < 1) {
          return [{desc: "didn't find video sources"}];
        }


        // customize facingCustom, desc
        for (var i = 0; i < videoSources.length; i++) {
          var vSrc = videoSources[i];
          Ember.Logger.debug("Video source:");
          Ember.Logger.debug(vSrc);

          if ( ! vSrc.label ) {
            vSrc.desc = "cam " + (i + 1); // start count from 1
          }

          if ( vSrc.facing ) {
            if ( vSrc.facing === "user" ) {
              vSrc.facingCustom = "front"; // self
            } else if (vSrc.facing === "environment" ) {
              vSrc.facingCustom = "back";
            }
          }
        }

        Ember.Logger.debug("Final video sources list:");
        Ember.Logger.debug(videoSources);
        return videoSources;
      }, function(reason) {
        return [{desc: reason}];
      });
  } // model

});
