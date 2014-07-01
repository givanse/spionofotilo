import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    return {
      message: params.message,
      // org.apache.cordova.device 
      device: ((typeof device) === "undefined") ? false : device,
      navigator: window.navigator
    };
  }
});
