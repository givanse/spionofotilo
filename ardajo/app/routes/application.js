import Ember from 'ember';

export default Ember.Route.extend({
  
  errorRedirect: function(message) {
    Ember.Logger.debug("errorRedirect()");
    Ember.Logger.debug(message);
    this.transitionTo("device-info", message);
  },

  actions: {

    shoot: function() {
      Ember.Logger.log("Modernizr.getusermedia", Modernizr.getusermedia);

      if (Modernizr.getusermedia) {
        Ember.Logger.log("try Modernizr.prefixed()");

        var _this = this;
        var errorCallback = function(e) {
          Ember.Logger.error("UserMedia");
          Ember.Logger.error(e.name);
          Ember.Logger.error(e.constraintName);
          Ember.Logger.error(e.message);
          _this.errorRedirect(e.name);
        };

        var successCallback = function(localMediaStream) {
          Ember.Logger.log("localMediaStream", localMediaStream);

          var video = document.querySelector("video");
          video.src = window.URL.createObjectURL(localMediaStream);

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
        Ember.Logger.log("gUM = ", typeof gUM);
        gUM(constraints, successCallback, errorCallback);

      } else {
        this.errorRedirect("getUserMedia() not supported");
      }
    }
  }
});
