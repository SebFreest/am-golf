import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import DivisionsAndChampionshipSeries from '../../../pages/clubsAndOrganizations/createEvent/divisionsAndChampionshipSeriesPage';


When(/^I should see no divisions added$/, function () {
    DivisionsAndChampionshipSeries.checkNoDivisionsMessage();
});

When(/^I should see no championship series added$/, function () {
    DivisionsAndChampionshipSeries.checkNoChampionshipSeriesMessage();
});

When(/^I select Add Division button$/, function () {
    DivisionsAndChampionshipSeries.addDivisionsBtn.waitForClickable();
    DivisionsAndChampionshipSeries.addDivisionsBtn.click();
});

When(/^I select Add Championship button$/, function () {
    DivisionsAndChampionshipSeries.addChampionship.waitForClickable();
    DivisionsAndChampionshipSeries.addChampionship.click();
});

// added the condition bellow because when the user edit the division details save button will appear instead of add
When(/^I fill out the division details:$/, function (table) {
    DivisionsAndChampionshipSeries.saveDivisonDetailsFromTable(table);
    if(DivisionsAndChampionshipSeries.addDivisonChampionshipModalBtn.isDisplayed()) {
        DivisionsAndChampionshipSeries.addDivisonChampionshipModalBtn.click();
    } else {
        DivisionsAndChampionshipSeries.saveDivisionDetailsBtn.click();
    }
});

When(/^I add the championship details as follows:$/, function (table) {
    DivisionsAndChampionshipSeries.saveChampionshipDetailsFromTable(table);
    DivisionsAndChampionshipSeries.addDivisonChampionshipModalBtn.click();
    browser.waitUntil(() => DivisionsAndChampionshipSeries.addChampionshipDialog.isDisplayed() == false, {timeout: 5000});
});

When(/^I open the added division "([^"]*)"$/, function (value: string) {
    DivisionsAndChampionshipSeries.clickOnAddedDivisionByName(value);
});

When(/^I delete "([^"]*)" from divisions list$/, function (divisionName: string) {
    browser.waitUntil(() => DivisionsAndChampionshipSeries.deleteBtnOfDivisions(divisionName).waitForDisplayed(), {timeout:1000});
    DivisionsAndChampionshipSeries.deleteBtnOfDivisions(divisionName).click();
});

When(/^I delete "([^"]*)" from championship list$/, function (championshipName: string) {
    browser.waitUntil(() => DivisionsAndChampionshipSeries.deleteBtnOfDivisions(championshipName).waitForDisplayed(), {timeout:1000});
    DivisionsAndChampionshipSeries.deleteBtnOfDivisions(championshipName).click();
});

Then(/^I should see the added division with correct details$/, function () {
    DivisionsAndChampionshipSeries.verifyAddedDivisionDetails();
});

Then(/^I should see the edited division with correct details$/, function () {
    DivisionsAndChampionshipSeries.verifyEditedDivisionDetails();
});

Then(/^I should see the added championship with correct details$/, function () {
    DivisionsAndChampionshipSeries.verifyAddedChampionshipDetails();
});

Then(/^I should not see "([^"]*)" added to divisions list$/, function (division: string) {
    expect(DivisionsAndChampionshipSeries.isDivisionAdded(division)).to.equal(false);
});

Then(/^I should not see "([^"]*)" added to championship list$/, function (championship: string) {
    expect(DivisionsAndChampionshipSeries.isDivisionAdded(championship)).to.equal(false);
});
