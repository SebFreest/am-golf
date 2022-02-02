import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import Awards from '../../../pages/clubsAndOrganizations/createEvent/awardsPage';


When(/^I select Add General Awards button$/, function () {
    Awards.selectAddGeneralAwardsBtn();
});

When(/^I select Add Special Awards button$/, function () {
    Awards.selectAddSpecialAwardsBtn();
});

When(/^I fill out the add general awards details:$/, function (table) {
    Awards.saveGeneralAwardsFromTable(table);
    if(Awards.addAwardsModalBtn.isDisplayed()) {
        Awards.addAwardsModalBtn.click();
        browser.waitUntil(() => Awards.addAwardsModalBtn.isDisplayed() == false, {timeout: 5000});
    } else {
        Awards.saveAwardsModalBtn.click();
        browser.waitUntil(() => Awards.saveAwardsModalBtn.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I fill out the add special awards details:$/, function (table) {
    Awards.saveGeneralAwardsFromTable(table);
    if(Awards.addAwardsModalBtn.isDisplayed()) {
        Awards.addAwardsModalBtn.click();
        browser.waitUntil(() => Awards.addAwardsModalBtn.isDisplayed() == false, {timeout: 5000});
    } else {
        Awards.saveAwardsModalBtn.click();
        browser.waitUntil(() => Awards.saveAwardsModalBtn.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I open the added general award "([^"]*)"$/, function (value: string) {
    Awards.openAddedGeneralAward(value);
});

When(/^I open the added special award "([^"]*)"$/, function (value: string) {
    Awards.openAddedSpecialAward(value);
});

When(/^I delete "([^"]*)" from general awards list$/, function (generalAward: string) {
    Awards.deleteGeneralAwards(generalAward);
});

When(/^I delete "([^"]*)" from special awards list$/, function (specialAward: string) {
    Awards.deleteSpecialAwards(specialAward);
});

Then(/^I should see no general awards added$/, function () {
    const expectedMessage = 'No general awards added yet.'
    expect(Awards.isNoGeneralAwardsMessageVisible()).to.equal(true);
    expect(Awards.noGeneralAwardsMessage.getText()).to.equal(expectedMessage);
});

Then(/^I should see no special awards added$/, function () {
    const expectedMessage = 'No special awards added yet.'
    expect(Awards.isNoSpecialAwardsMessageVisible()).to.equal(true);
    expect(Awards.noSpecialAwardsMessage.getText()).to.equal(expectedMessage);
});

Then(/^I should see the added general awards with correct details$/, function () {
    Awards.verifyAddedGeneralAwards();
});

Then(/^I should see the edited general awards with correct details$/, function () {
    Awards.verifEditedGeneralAwards();
});

Then(/^I should see the added special awards with correct details$/, function () {
    Awards.verifyAddedSpecialAwards();
});

Then(/^I should see the edited special awards with correct details$/, function () {
    Awards.verifEditedSpecialAwards();
});