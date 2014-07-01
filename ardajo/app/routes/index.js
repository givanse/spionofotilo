import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
    var defaultRoute = "whatsapp";
    this.transitionTo(defaultRoute);
  }
});
