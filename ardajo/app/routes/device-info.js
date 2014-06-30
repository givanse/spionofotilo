import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      message: "",
      device: typeof device === "undefined" ? false : device, // org.apache.cordova.device 
      navigator: window.navigator
    };
  }
});
