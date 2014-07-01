import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ArdajoENV.locationType
});

Router.map(function() {
  this.route('whatsapp');
  this.route('news');
  this.route('settings');
  this.route('application');
  this.route('device-info', {path: "/device-info/:message"});
});

export default Router;
