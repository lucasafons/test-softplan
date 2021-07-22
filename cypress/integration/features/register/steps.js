/// <reference types="cypress" />

import register from '../../support/pages/register'

Given(/^I am an user entering in UsersTab for registration$/, () => {
  register.accessUsersTab();
});


When(/^I enter my username and email$/, () => {
	register.registerAndCheckUsername();
});

When(/^my email$/, () => {
	register.registerAndCheckEmail();
});


Then(/^I will save my register$/, () => {
	register.saveData();
});






