import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import { correctUser, incorrectUser } from '../data/definitions/credentials';
import loginPage from '../pages/loginPage'

Given(/^I am on the login page$/, function () {
    loginPage.selectLoginTab();
});

When(/^I set incorrect credentials$/, function () {
    loginPage.usernameInput.waitForDisplayed();
    loginPage.setUsername(incorrectUser.username);
    loginPage.setPassword(incorrectUser.password);
});

When(/^I click on Submit button$/, function () {
    loginPage.submitBtn.click();
});

When(/^I click on forgot password link$/, function () {
    loginPage.forgotPasswordLink.waitForDisplayed();
    loginPage.forgotPasswordLink.click();
});

When(/^I click on register button$/, function () {
    loginPage.registerBtn.waitForDisplayed();
    loginPage.registerBtn.click();
});

When(/^I login as "([^"]*)"$/, function (userAlias: string) {
    loginPage.usernameInput.waitForDisplayed();
    loginPage.setUsername(correctUser.username);
    loginPage.setPassword(correctUser.password);

    loginPage.submitBtn.click();
});

Then(/^I should see that credentials are incorrect$/, function () {
    loginPage.loginError.waitForDisplayed();
    expect(loginPage.loginError.getText()).to.equal(loginPage.messages.invalidData);
});

Then(/^I should see that Username field is mandatory$/, function () {
    loginPage.usernameErrorMessage.waitForDisplayed();
    expect(loginPage.usernameErrorMessage.getText()).to.equal(loginPage.messages.usernameErrorMessage);
});

Then(/^I should be redirected to reset password window$/, function () {
    loginPage.rstPasswordTitle.waitForDisplayed();
    expect(loginPage.rstPasswordTitle.getText()).to.equal(loginPage.messages.resetPasswordModalTitle);
    expect(loginPage.rstPasswordBtn.isDisplayed()).to.equal(true);
});

Then(/^I should be redirected to Register page$/, function () {
    loginPage.registerPage.waitForDisplayed();
    expect(loginPage.registerPage.getText()).to.equal(loginPage.messages.registerPageTitle);
    expect(loginPage.registerBtn.isDisplayed()).to.equal(true);
});

Then(/^I should successfully logged in$/, function () {
    loginPage.welcomeHeaderh1.waitForDisplayed();
    loginPage.welcomeHeaderh2.waitForDisplayed();
    expect(loginPage.welcomeHeaderh1.getText()).to.equal(loginPage.messages.welcomeH1message);
    expect(loginPage.welcomeHeaderh2.getText()).to.equal(loginPage.messages.welcomeH2message);
});
