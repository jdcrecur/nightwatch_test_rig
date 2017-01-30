module.exports = {

    // This will be run before each test suite is started
    beforeEach: function(browser, done) {
        // getting the session info
        browser.status(function(result) {
            //done...
            done();
        });
    },

    /**
     * The grace times for the dev server.
     */
    graceTime: 1000, /* typically the time allowed when waiting for a server response */
    graceTimeAjaxRequest: 500, /* the time allowed for ajax calls, eg search */
    graceTimeJavascriptCompute: 250, /* the time to pause for the autocomplete to respond */

    url: 'https://www.google.com'
};