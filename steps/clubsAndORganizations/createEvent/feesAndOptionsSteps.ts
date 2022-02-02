import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import feesAndOptionsPage from '../../../pages/clubsAndOrganizations/createEvent/feesAndOptionsPage';
import FeesAndOptions from '../../../pages/clubsAndOrganizations/createEvent/feesAndOptionsPage';



When(/^I open the Currency drop-down$/, function () {
    FeesAndOptions.openCurrencyDropDown();
});

When(/^I select (Add tournament fee|Add Accomodation|Add Service|Add Individual|Add Group|Add public discount) button$/, function (buttonName: string) {
    FeesAndOptions.selectFeesButtonsByName(buttonName);
});

When(/^I select "([^*]*)" as currency$/, function (currencyName: string) {
    FeesAndOptions.selectCurrencyByName(currencyName);
});

Then(/^I should see no (tournament fees|accomodation options|other services|private discount) added$/, function (messageType: string) {
    FeesAndOptions.checkNoFeesMessages(messageType);
});

Then(/^I should see correct values in the Currency dropdown$/, function () {
    FeesAndOptions.verifyValuesOfCurrencyDropDown();
});

When(/^I fill out the add tournament fee details:$/, function (table) {
    FeesAndOptions.saveTournamentFeeFromTable(table);
    if(FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed()) {
        FeesAndOptions.addBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    } else {
        FeesAndOptions.saveBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.saveBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I open the added tournament fee "([^"]*)"$/, function (value: string) {
    FeesAndOptions.openAddedTournamentFee(value);
});

When(/^I add "([^"]*)" as tournament fee$/, function (value: string) {
    const splitedValue = value.split(' ');
    const currencyValue = splitedValue[1];
    const feeValue = splitedValue[0];
    FeesAndOptions.selectCurrencyByName(currencyValue);

    FeesAndOptions.selectFeesButtonsByName('Add tournament fee');
    FeesAndOptions.tournamentFeePriceInput.waitForDisplayed();
    FeesAndOptions.tournamentFeePriceInput.setValue(feeValue);
    FeesAndOptions.addBtnOfFeesAndOptionsModal.click();
    browser.waitUntil(() => FeesAndOptions.saveBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
});

When(/^I fill out the discount details:$/, function (table) {
    FeesAndOptions.saveDiscountDetailsFromTable(table);
    if(FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed()) {
        FeesAndOptions.addBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    } else {
        FeesAndOptions.saveBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.saveBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I select discount for "([^"]*)"$/, function (value: string) {
    FeesAndOptions.addedTournamentFeeByName(value).waitForDisplayed();
    FeesAndOptions.addedTournamentFeeByName(value).click();
});

When(/^I delete the added tournament "([^"]*)"$/, function (clubName: string) {
    FeesAndOptions.deleteTournamentFee(clubName);
});

When(/^I delete the club "([^"]*)" from discount list$/, function (tournamentFee: string) {
    FeesAndOptions.deleteTournamentFee(tournamentFee + ' Members');
});

When(/^I fill out the accomodation details:$/, function (table) {
    FeesAndOptions.saveAccomodationFromTable(table);
    if(FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed()) {
        FeesAndOptions.addBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    } else {
        FeesAndOptions.saveBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.saveBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I open the added accomodation option "([^"]*)"$/, function (value: string) {
    FeesAndOptions.openAddedAccomodationOption(value);
});

When(/^I delete the added accomodation option "([^"]*)"$/, function (accomodationName: string) {
    FeesAndOptions.deleteAccomodation(accomodationName);
});

When(/^I fill out the add other services details:$/, function (table) {
    FeesAndOptions.saveOtherServiceFromTable(table);
    if(FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed()) {
        FeesAndOptions.addBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    } else {
        FeesAndOptions.saveBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.saveBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I open the added service "([^"]*)"$/, function (value: string) {
    FeesAndOptions.openAddedServices(value);
});

When(/^I delete the added service "([^"]*)"$/, function (serviceName: string) {
    FeesAndOptions.deleteService(serviceName);
});

When(/^I fill out the private discount details:$/, function (table) {
    FeesAndOptions.saveIndividualDiscountFromTable(table);
    if(FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed()) {
        FeesAndOptions.addBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.addBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    } else {
        FeesAndOptions.saveBtnOfFeesAndOptionsModal.click();
        browser.waitUntil(() => FeesAndOptions.saveBtnOfFeesAndOptionsModal.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I open the added individual discount "([^"]*)"$/, function (value: string) {
    FeesAndOptions.openAddedIndividualDiscount(value);
});

When(/^I delete the added individual discount "([^"]*)"$/, function (discount: string) {
    FeesAndOptions.deleteIndividualDiscount(discount);
});

Then(/^I should see the tournament fee added correctly with no description$/, function () {
    FeesAndOptions.verifyAddedTournamentFeeWithNoDescription();
});

Then(/^I should see the tournament fee added as FREE$/, function () {
    expect(FeesAndOptions.addedTournamentFee[1].getText()).to.equal('FREE');
});

Then(/^I should "([^*]*)" added as tournament fee$/, function (feeValue: string) {
    expect(FeesAndOptions.addedTournamentFee[1].getText()).to.equal(feeValue);
});

Then(/^I should see Add public discount button visibile$/, function () {
    expect(FeesAndOptions.checkDiscountButtonVisibility()).to.equal(true);
});

Then(/^I should see "([^"]*)" discount for club "([^"]*)"$/, function (discount: string, clubName: string) {
    FeesAndOptions.verifyAddedDiscount(discount, clubName);
});

Then(/^I should not see discount for the club "([^"]*)"$/, function (clubName: string) {
    expect(FeesAndOptions.verifyNoDiscountForClub(clubName)).to.equal(false);
});

Then(/^I should see the added accomodation with correct details$/, function () {
    feesAndOptionsPage.verifyAddedAccomodation();
});

Then(/^I should see the edited accomodation with correct details$/, function () {
    feesAndOptionsPage.verifyEditedAccomodation();
});

Then(/^I should see the added services with correct details$/, function () {
    feesAndOptionsPage.verifyAddedServices();
});

Then(/^I should see the edited services with correct details$/, function () {
    feesAndOptionsPage.verifyEditedServices();
});

Then(/^I should see the added individual discount with correct details$/, function () {
    feesAndOptionsPage.verifyAddedIndividualDiscount();
});

Then(/^I should see the edited individual discount with correct details$/, function () {
    feesAndOptionsPage.verifyEditedIndividualDiscount();
});

Then(/^I should see the added group discount with correct details$/, function () {
    feesAndOptionsPage.verifyAddedGroupDiscount();
});

Then(/^I should see the group individual discount with correct details$/, function () {
    feesAndOptionsPage.verifyEditedGroupDiscount();
});
