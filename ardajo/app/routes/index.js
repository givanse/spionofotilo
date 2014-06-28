import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {
    var defaultTemplate = 'whatsapp';
    this.render(defaultTemplate);
  }
});
