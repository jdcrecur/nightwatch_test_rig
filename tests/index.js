module.exports = {
	'Step1 - Load google': function (browser) {

		//load the url
		browser.url(browser.globals.url + '/');

		//wait for the body
		browser.waitForElementVisible('body', browser.globals.graceTime);
	},

	'Step2 - Roll it': function( browser ){
        //enter the form value and then submit
        browser.setValue('form input[name=q]', 'do a barrel roll');

        browser.submitForm('form');
	}
};