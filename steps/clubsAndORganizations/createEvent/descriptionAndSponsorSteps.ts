import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import DescriptionAndSponsor from '../../../pages/clubsAndOrganizations/createEvent/descriptionAndSponsorPage';

When(/^I fill out the Description "([^"]*)"$/, function (descriptionText: string) {
    DescriptionAndSponsor.setDescriptionText(descriptionText);
});

When(/^I select Add Sponsor button$/, function () {
    DescriptionAndSponsor.addSponsorBtn.waitForClickable();
    DescriptionAndSponsor.addSponsorBtn.click();
});

When(/^I add "([^"]*)" as sponsor$/, function (sponsorName: string) {
    DescriptionAndSponsor.addBtnSponsorModal.waitForDisplayed();
    DescriptionAndSponsor.selectSponsorByName(sponsorName);
    DescriptionAndSponsor.addBtnSponsorModal.click();
    browser.waitUntil(() => DescriptionAndSponsor.addedSponsorsTag(sponsorName).isDisplayed(), {timeout: 5000});
});

When(/^I mark "([^"]*)" to add as sponsor$/, function (sponsorName: string) {
    DescriptionAndSponsor.addBtnSponsorModal.waitForDisplayed();
    DescriptionAndSponsor.selectSponsorByName(sponsorName);
});

When(/^I Add all the selected sponsors$/, function () {
    DescriptionAndSponsor.addBtnSponsorModal.waitForDisplayed();
    DescriptionAndSponsor.addBtnSponsorModal.click();
});

When(/^I delete "([^"]*)" from sponsors list$/, function (sponsorName: string) {
    browser.waitUntil(() => DescriptionAndSponsor.deleteBtnOfSponsor(sponsorName).waitForDisplayed(), {timeout:5000});
    DescriptionAndSponsor.deleteBtnOfSponsor(sponsorName).click();
});

When(/^I select Add New sponsor option$/, function () {
    browser.waitUntil(() => DescriptionAndSponsor.addNewSponsorBtn.waitForClickable(), {timeout: 2000});
    DescriptionAndSponsor.addNewSponsorBtn.click();
});

When(/^I fill out the new sponsor details:$/, function (table) {
    DescriptionAndSponsor.saveSponsorDetailsFromTable(table);
    DescriptionAndSponsor.addAddNewSponsorBtn.click();
    DescriptionAndSponsor.addBtnSponsorModal.click();
});

Then(/^I should find "([^"]*)" in the sponsors modal$/, function (sponsorName: string) {
    DescriptionAndSponsor.addBtnSponsorModal.waitForDisplayed();
    DescriptionAndSponsor.searchSponsorInput.setValue(sponsorName);
    browser.waitUntil(() => DescriptionAndSponsor.sponsorList(sponsorName).waitForDisplayed(), {timeout: 5000});
    expect(DescriptionAndSponsor.sponsorList(sponsorName).isDisplayed()).to.equal(true);
});

Then(/^I should (see|not see) "([^"]*)" in the sponsors list$/, function (visibility: string, sponsor: string) {
    if(visibility === 'see') {
        browser.waitUntil(() => DescriptionAndSponsor.addedSponsorsList(sponsor).isDisplayed(), {timeout: 3000});
        expect(DescriptionAndSponsor.isSponsorAdded(sponsor)).to.equal(true);
    } else {
        expect(DescriptionAndSponsor.isSponsorAdded(sponsor)).to.equal(false);
    }
});