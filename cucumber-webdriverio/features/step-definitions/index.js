//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
	Given('I go to losestudiantes home screen', () => {
		browser.url('/');
		if(browser.isVisible('button=Cerrar')) {
			browser.click('button=Cerrar');
		}
	});

	When('I open the login screen', () => {
		browser.waitForVisible('button=Ingresar', 5000);
		browser.click('button=Ingresar');
	});

	// --------------------------------------
	// LOGIN FEATURE 
	// --------------------------------------
	When('I fill a wrong email and password', () => {
		var cajaLogIn = browser.element('.cajaLogIn');

		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys('wrongemail@example.com');

		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys('123467891')
	});

	When('I try to login', () => {
		var cajaLogIn = browser.element('.cajaLogIn');
		cajaLogIn.element('button=Ingresar').click()
	});

	Then('I expect to not be able to login', () => {
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
	});

	When(/^I fill with (.*) and (.*)$/ , (email, password) => {
		var cajaLogIn = browser.element('.cajaLogIn');
		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);

		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password)
	});

	Then('I expect to see {string}', error => {
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	});

	Then('I expect to have a my account button', () => {
		browser.waitForVisible("#cuenta", 5000);
		var button = browser.element('#cuenta');
		expect(button).to.exist;
	});

	Then('I dont expect to see {string}', error => {
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	});


	// --------------------------------------
	// SIGN UP FEATURE 
	// --------------------------------------
	When(/^I fill name with (.*)$/ , (name) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="nombre"]');
		input.click();
		input.keys(name);
	});

	When(/^I fill last name with (.*)$/ , (last_name) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="apellido"]');
		input.click();
		input.keys(last_name);
	});

	When(/^I fill email with (.*)$/ , (email) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="correo"]');
		input.click();
		input.keys(email);
	});

	When(/^I fill password with (.*)$/ , (password) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="password"]');
		input.click();
		input.keys(password);
	});

	When('I accept the terms and conditions', () => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var input = cajaSignUp.element('input[name="acepta"]');
		input.click();
	});

	When('I select a program', () => {
		var cajaSignUp = browser.element('.cajaSignUp');
		var programSelector = cajaSignUp.element('select[name="idPrograma"]');
		programSelector.selectByValue("12");
	});

	When('I try to sign up', () => {
		var cajaSignUp = browser.element('.cajaSignUp');
		cajaSignUp.element('button=Registrarse').click()
	});
});
