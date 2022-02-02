import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import privacyPage from '../../../pages/clubsAndOrganizations/createEvent/privacyPage';


When(/^I open the Social Page drop-down$/, function () {
    privacyPage.openSocialPageDropDown();
});

When(/^I open the Participants Page drop-down$/, function () {
    privacyPage.openparticipantsPageDropDown();
});

When(/^I open the Leaderboards Page drop-down$/, function () {
    privacyPage.openleaderboardsPageDropDown();
});

When(/^I open the Flights Page drop-down$/, function () {
    privacyPage.openflightsPageDropDown();
});

When(/^I open the Scores Edit drop-down$/, function () {
    privacyPage.openscoreEditDropDown();
});

Then(/^I should see correct values in the Social Page field$/, function () {
    privacyPage.verifyValuesOfSocialPage();
});

Then(/^I should see correct values in the Participants Page field$/, function () {
    privacyPage.verifyValuesOfParticipantsPage();
});

Then(/^I should see correct values in the Leaderboards Page field$/, function () {
    privacyPage.verifyValuesOfLeaderboardsPage();
});

Then(/^I should see correct values in the Flights Page field$/, function () {
    privacyPage.verifyValuesOfFlightsPage();
});

Then(/^I should see correct values in the Scores Edit field$/, function () {
    privacyPage.verifyValuesOfScoresEdit();
});