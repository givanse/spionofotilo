import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ArdajoENV.locationType
});

Router.map(function() {
  this.route('whatsapp');
  this.route('settings');
  this.route('application');
});

export default Router;
