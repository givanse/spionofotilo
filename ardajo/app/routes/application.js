import Ember from 'ember';

export default Ember.Route.extend({
  
  errorRedirect: function(message) {
    Ember.Logger.debug("errorRedirect()");
    Ember.Logger.debug(message);
    this.transitionTo("device-info", message);
  },

  actions: {

    shoot: function() {
      Ember.Logger.log("check value of Modernizr.getusermedia: ", Modernizr.getusermedia);

      if (Modernizr.getusermedia) {
        Ember.Logger.log("try Modernizr.prefixed()");

        var _this = this;
        var errorCallback = function(e) {
          Ember.Logger.error("errorCallback");
          Ember.Logger.error("name", e.name);
          Ember.Logger.error("constraintName", e.constraintName);
          Ember.Logger.error("message", e.message);
          _this.errorRedirect(e.name ? e.name : "errorCallback");
        };

        var successCallback = function(localMediaStream) {
          Ember.Logger.debug("[dbg] localMediaStream");
          Ember.Logger.debug(localMediaStream);

          var video$ = Ember.$("video#viewport");
          Ember.Logger.debug("[dbg] video$");
          Ember.Logger.debug(video$);
          var url = window.URL || window.webkitURL;
          Ember.Logger.debug("[dbg] url");
          Ember.Logger.debug(url);
          var src = url.createObjectURL(localMediaStream) || localMediaStream;
          Ember.Logger.debug("[dbg] src");
          Ember.Logger.debug(src);
          video$.attr("src", src);
          Ember.Logger.debug("[dbg] video$.get()[0]");
          Ember.Logger.debug(video$.get()[0]);
          video$.get()[0].play();

          // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
          // See crbug.com/110938.
          video.onloadedmetadata = function(e) {
            // Ready to go. Do some stuff.
          };
        };

        var constraints = {
          video: true
        };

        var gUM = Modernizr.prefixed("getUserMedia", navigator);
        Ember.Logger.log("typeof gUM = ", typeof gUM);
        gUM(constraints, successCallback, errorCallback);

      } else {
        this.errorRedirect("getUserMedia() not supported");
      }
    }
  }
});
