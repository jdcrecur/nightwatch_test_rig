module.exports = {

    url: 'https://www.google.com',

    /**
     * The grace times for the dev server.
     */
    graceTime: 10000, /* typically the time allowed when waiting for a server response */
    graceTimeAjaxRequest: 5000, /* the time allowed for ajax calls, eg search */
    graceTimeJavascriptCompute: 2500, /* the time to pause for the autocomplete to respond */

    credentials: {

        someAccount: {
            username: 'someemail@yettosetup.com',
            password: 'somepassword'
        }
    }
};