var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        window.ArdajoENV = {"environment":"development","locationType":"none","EmberENV":{"FEATURES":{}},"APP":{"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_MODULE_RESOLVER":true,"LOG_VIEW_LOOKUPS":true},"LOG_MODULE_RESOLVER":true};
        window.EmberENV = window.ArdajoENV.EmberENV;
        window.Ardajo = require('ardajo/app')['default'].create(ArdajoENV.APP);
    }
};
