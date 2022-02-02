import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import GeneralInformation from '../../../pages/clubsAndOrganizations/createEvent/generalInformationPage'


When(/^I fill out the Event Name "([^"]*)"$/, function (eventName: string) {
    GeneralInformation.setEventName(eventName);
});

When(/^I select Save event$/, function () {
    GeneralInformation.saveEventBtn.waitForClickable();
    GeneralInformation.saveEventBtn.click();
});

When(/^I select Cancel event button$/, function () {
    GeneralInformation.cancelEventBtn.waitForClickable();
    GeneralInformation.cancelEventBtn.click();
});

When(/^I confirm the Save selection$/, function () {
    GeneralInformation.confirmCreateEvPopUpBtn.waitForClickable();
    GeneralInformation.confirmCreateEvPopUpBtn.click();
});

When(/^I jumt to another Event Creation step$/, function () {
    GeneralInformation.eventRegistriationStep.waitForDisplayed();
    GeneralInformation.eventRegistriationStep.click();
});

When(/^I select Add Another organization button$/, function () {
    GeneralInformation.addAnotherClubBtn.waitForDisplayed();
    GeneralInformation.addAnotherClubBtn.click();
});

When(/^I add "([^"]*)" as a secondary organizer on create event page$/, function (organizationName: string) {
    GeneralInformation.addAnotherClubBtn.waitForDisplayed();
    GeneralInformation.addAnotherClubBtn.click();
    GeneralInformation.selectOrganizationsByName(organizationName);
    GeneralInformation.addOrganizationBtn.click();
});

When(/^I delete "([^"]*)" from organizers list$/, function (organizationName: string) {
    GeneralInformation.deleteOrganizerByName(organizationName);
});

When(/^I confirm the Delete action$/, function () {
    browser.waitUntil(() => GeneralInformation.confirmDeleteBtn.isDisplayed() == true, {timeout: 10000});
    GeneralInformation.confirmDeleteBtn.click();
    browser.waitUntil(() => GeneralInformation.confirmDeletePopUp.isExisting() === false, {timeout: 10000});
});

When(/^I select "([^"]*)" organization$/, function (organizationName: string) {
    GeneralInformation.selectOrganizationsByName(organizationName);
});

When(/^I select Cancel adding organization$/, function () {
    GeneralInformation.cancelAddOrganizationBtn.waitForDisplayed();
    GeneralInformation.cancelAddOrganizationBtn.click();
    browser.pause(500);
});

When(/^I open the Event Type drop-down$/, function () {
    GeneralInformation.eventTypeDropDown.waitForDisplayed();
    GeneralInformation.eventTypeDropDown.click();
    browser.pause(500);
});

When(/^I open the Event Visibility drop-down$/, function () {
    GeneralInformation.openEventVisibilityDropDown();
});

When(/^I open the Event Registration drop-down$/, function () {
    GeneralInformation.eventRegistrationDropDown.waitForDisplayed();
    GeneralInformation.eventRegistrationDropDown.click();
    browser.pause(500);
});

When(/^I select "([^"]*)" from Event Type drop-down$/, function (eventTypeName: string) {
    GeneralInformation.eventTypeDropDown.waitForDisplayed();
    GeneralInformation.eventTypeDropDown.click();
    GeneralInformation.selectEventTypeByName(eventTypeName);
});

When(/^I select "([^"]*)" registration step$/, function (stepName: string) {
    GeneralInformation.selectRegistrationStepByName(stepName);
    browser.pause(500);
});

Then(/^I should see error message at Event Name field$/, function () {
    GeneralInformation.eventNameErrorMessage.waitForDisplayed();
    expect(GeneralInformation.eventNameErrorMessage.getText()).to.equal(GeneralInformation.eventIdentifiers.eventNameFieldErrMsg);
});

Then(/^I should see the Delete button (disabled|enabled) on create event page for "([^"]*)"$/, function (btnStatus: string, clubName: string) {
    if (btnStatus === 'disabled') {
        expect(GeneralInformation.deleteBtnOfClub(clubName).getCSSProperty('opacity').value).to.equal(0.5);
    } else {
        expect(GeneralInformation.deleteBtnOfClub(clubName).isEnabled()).to.equal(true);
    }
});

Then(/^I should (see|not see) "([^"]*)" in the organizers list$/, function (visibility: string, organizer: string) {
    const isClubAdded = GeneralInformation.isOrganizerAdded(organizer);
    if(visibility === 'see') {
        expect(isClubAdded).to.equal(true);
    } else {
        expect(isClubAdded).to.equal(false);
    }
});

Then(/^I should see a delete pop-up which states: "([^"]*)"$/, function (message: string) {
    GeneralInformation.confirmDeletePopUp.waitForDisplayed({timeout: 1000});
    expect(GeneralInformation.confirmDeletePopUp.getText()).to.equal(message);
});

Then(/^Add Organizer modal should close$/, function () {
    browser.waitUntil(
        () => GeneralInformation.addOrganizersModal.isDisplayed() === false
    );
    expect(GeneralInformation.addOrganizersModal.isDisplayed()).to.equal(false);
});

Then(/^I should see Add button disabled$/, function () {
    expect(GeneralInformation.addOrganizationBtn.isEnabled()).to.equal(false);
});

Then(/^I should see Add button enabled$/, function () {
    expect(GeneralInformation.addOrganizationBtn.isEnabled()).to.equal(true);
});

Then(/^I should see correct values in the Event Visibility field$/, function () {
    GeneralInformation.verifyValuesOfEventVisibility();
});

Then(/^I should see correct values in the Event Type field$/, function () {
    GeneralInformation.verifyValuesOfEventType();
});

Then(/^I should see correct values in the Event Registration field$/, function () {
    GeneralInformation.verifyValuesOfEventRegistration();
});

Then(/^I should see the registration steps corresponding to Tournament Event Type$/, function () {
    expect(GeneralInformation.registrationSteps.length).to.equal(9);
});

Then(/^I should see the registration steps corresponding to Championship Series Event Type$/, function () {
    expect(GeneralInformation.registrationSteps.length).to.equal(7);
});

Then(/^I should see the registration steps corresponding to Other event Event Type$/, function () {
    expect(GeneralInformation.registrationSteps.length).to.equal(3);
});

Then(/^I should not be able to select start date from the past$/, function () {
    GeneralInformation.startDateInput.waitForClickable();
    GeneralInformation.startDateInput.click();
    expect(GeneralInformation.calendarLefArrow.getAttribute('class')).includes('disabled');
    GeneralInformation.datePickerCloseBtn.click();
});

Then(/^I should not be able to select end date from the past$/, function () {
    GeneralInformation.endDateInput.waitForClickable();
    GeneralInformation.endDateInput.click();
    expect(GeneralInformation.calendarLefArrow.getAttribute('class')).includes('disabled');
    GeneralInformation.datePickerCloseBtn.click();
});