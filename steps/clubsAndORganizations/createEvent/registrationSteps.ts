import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import Registration from '../../../pages/clubsAndOrganizations/createEvent/registrationPage'


When(/^I open the registration drop-down$/, function () {
    Registration.openRegistrationDropDown();
});

When(/^I select "([^"]*)" from registration drop-down$/, function (value: string) {
    Registration.selectRegistrationByName(value);
});

When(/^I open the type drop-down$/, function () {
    Registration.openTypeDropDown();
});

When(/^I open the visibility drop-down$/, function () {
    Registration.openVisibilityDropDown();
});

When(/^I select Before it expires option$/, function () {
    Registration.selectBeforeItExpires();
});

When(/^I select Add Info button$/, function () {
    Registration.selectAddInfoButton();
});

When(/^I select Add Details button$/, function () {
    Registration.selectAddDetailsButton();
});

When(/^I fill out the additional info details:$/, function (table) {
    Registration.saveAdditionInfoFromTable(table);
    if(Registration.addAdditionalInfoModalBtn.isDisplayed()) {
        Registration.addAdditionalInfoModalBtn.click();
        browser.waitUntil(() => Registration.addAdditionalInfoDialog.isDisplayed() == false, {timeout: 3000});
    } else {
        Registration.saveAdditionalInfoModalBtn.click();
        browser.waitUntil(() => Registration.addAdditionalInfoDialog.isDisplayed() == false, {timeout: 3000});
    }
});

When(/^I select "([^"]*)" from answer type drop-down$/, function (value: string) {
    Registration.selectAnswerTypeByName(value);
});

When(/^I add a choice with choice name "([^"]*)"$/, function (value: string) {
    Registration.addChoice(value);
});

When(/^I delete the added choice$/, function () {
    Registration.deleteChoice();
});

When(/^I type "([^"]*)" in request summary field$/, function (value: string) {
    Registration.typeInRequestSummary(value);
});

When(/^I type "([^"]*)" in full request field$/, function (value: string) {
    Registration.typeInFullRequest(value);
});

When(/^I select Save Additional Info button$/, function () {
    Registration.selectSaveAdditionInfoBtnFromModal();
});

When(/^I open the added additional info "([^"]*)"$/, function (value: string) {
    Registration.openAdditionalInfo(value);
});

When(/^I delete "([^"]*)" from additional info list$/, function (additionInfoName: string) {
    Registration.deleteAdditionalInfo(additionInfoName);
});

When(/^I fill out the add agreement details:$/, function (table) {
    Registration.saveAddAgreementFromTable(table);
    if(Registration.addAdditionalInfoModalBtn.isDisplayed()) {
        Registration.addAdditionalInfoModalBtn.click();
        browser.waitUntil(() => Registration.addAgreementDialog.isDisplayed() == false, {timeout: 2000});
    } else {
        Registration.saveAdditionalInfoModalBtn.click();
        browser.waitUntil(() => Registration.addAgreementDialog.isDisplayed() == false, {timeout: 2000});
    }
});

When(/^I open the added agreement "([^"]*)"$/, function (value: string) {
    Registration.openAggrementDetails(value);
});

When(/^I delete "([^"]*)" from aggrement details list$/, function (agreementDetails: string) {
    Registration.deleteAddedAgreement(agreementDetails);
});

Then(/^I should see "([^"]*)" as default value of the type drop-down$/, function (value: string) {
    Registration.verifyTypeFieldValue(value);
});

Then(/^I should see correct values in the Registration drop-down$/, function () {
    Registration.verifyValuesOfRegistrationDropDown();
});

Then(/^I should see "([^"]*)" as default value of the registration drop-down$/, function (value: string) {
    Registration.verifyRegistrationFieldValue(value);
});

Then(/^I should see a message under the registration field$/, function () {
    Registration.verifyMessageForInvitational();
});

Then(/^I should not be able to select start date from the past at registration step$/, function () {
    Registration.verifyCannotSelectStartDateFromThePast();
});

Then(/^I should not be able to select end date from the past at registration step$/, function () {
    Registration.verifyCannotSelectEndDateFromThePast();
});

Then(/^I should see correct values in the Type drop-down$/, function () {
    Registration.verifyValuesOTypeDropDown();
});

Then(/^I should see "([^"]*)" as default value of the visibility drop-down$/, function (value: string) {
    Registration.verifyVisibilityFieldValue(value);
});

Then(/^I should see correct values in the Visibility drop-down$/, function () {
    Registration.verifyValuesOfVisibilityDropDown();
});

Then(/^I should see Number field disabled$/, function () {
    expect(Registration.isNumberFieldDisabled()).to.equal(true);
});

Then(/^I should see Number field enabled$/, function () {
    expect(Registration.isNumberFieldDisabled()).to.equal(false);
});

Then(/^I should see Time unit field disabled$/, function () {
    expect(Registration.isTimeUnitFieldDisabled()).to.equal(true);
});

Then(/^I should see Time unit field enabled$/, function () {
    expect(Registration.isTimeUnitFieldDisabled()).to.equal(false);
});

Then(/^I should see the added additional info with correct details$/, function () {
    Registration.verifyAddedAdditionalInfo();
});

Then(/^I should see Add Choice button displayed$/, function () {
    expect(Registration.isAddChoiceButtonDisplayed()).to.equal(true);
});

Then(/^I should see the choice with name "([^"]*)" added$/, function (choiceName: string) {
    expect(Registration.isChoiceAdded(choiceName)).to.equal(true);
});

Then(/^I should not see "([^"]*)" in the choice list$/, function (choiceName: string) {
    expect(Registration.isChoiceAdded(choiceName)).to.equal(false);
});

Then(/^I should see the added additional info with correct details and single choice$/, function () {
    Registration.verifyAddedAdditionalInfoWithSingleChoice();
});

Then(/^I should see the edited additional info with the correct details$/, function () {
    Registration.verifyEditedAdditionalInfo();
});

Then(/^I should not see "([^"]*)" added to additional info list$/, function (additionalInfoName: string) {
    expect(Registration.isAdditionalInfoAdded(additionalInfoName)).to.equal(false);
});

Then(/^I should see the added agreement with the correct details$/, function () {
    Registration.verifyAddedAgreementDetails();
});

Then(/^I should see the edited agreement with the correct details$/, function () {
    Registration.verifyEditedAgreementDetails();
});

Then(/^I should not see "([^"]*)" added to agreement details list$/, function (agrementDetails: string) {
    expect(Registration.isAgreementDetailsAdded(agrementDetails)).to.equal(false);
});