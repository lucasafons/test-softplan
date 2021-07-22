/// <reference types="cypress" />

import register from '../../support/pages/register'

context("Register", () => {
  it("Register a user", () => {
    // arrange
    register.accessUsersTab();
    // action
    register.registerAndCheckUsername();
    register.registerAndCheckEmail();
    // assert
    register.saveData();
  });
});
