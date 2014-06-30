import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    shoot: function() {
      if (Modernizr.getusermedia) {

        var errorCallback = function(e) {
          console.log('Reeeejected!', e);
        };

        var successCallback = function(localMediaStream) {
          console.log(localMediaStream);

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

        // http://caniuse.com/#search=getUserMedia
        var gUM = Modernizr.prefixed('getUserMedia', navigator);
        gUM(constraints, successCallback, errorCallback);

      } else {
        var model = {
          message: "no getUserMedia()",
          device: typeof device === "undefined" ? device : false, // org.apache.cordova.device 
          navigator: window.navigator
        };
        this.transitionTo("device-info", model);
      }

      // Phonegap capture
    }
  }
});
