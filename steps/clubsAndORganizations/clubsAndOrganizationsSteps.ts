import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import clubsAndOrganizations from '../../pages/clubsAndOrganizations/clubsAndOrganizationsPage'

const organizationsUrl = '/am.golf/organizations.amg.html';
const openedTournamentUrl = '/am.golf/events/list/';
const createEventUrl = '/home/edit_event.amg.html';

Given(/^I navigate to Clubs and Organizations tab$/, function () {
    clubsAndOrganizations.clubsAndOrganizationsTab.waitForDisplayed();
    clubsAndOrganizations.clubsAndOrganizationsTab.click();
    let currentUrl = browser.getUrl();
    expect(currentUrl).includes(organizationsUrl);
});

When(/^I select "([^"]*)" as organization$/, function (organizationName:string) {
    clubsAndOrganizations.selectClubByName(organizationName);
});

When(/^I select "([^"]*)" as organization where I am not assigned as administrator$/, function (organizationName: string) {
    clubsAndOrganizations.selectClubByName(organizationName);
});

Then(/^I am redirected to the created tournament page$/, function () {
    clubsAndOrganizations.tournamentPageHeader.waitForDisplayed();
    let currentUrl = browser.getUrl();
    expect(currentUrl).includes(openedTournamentUrl);
});

Then(/^I should be redirected to Golf Club page$/, function () {
    clubsAndOrganizations.clubHomePageHeader.waitForDisplayed();
    expect(clubsAndOrganizations.clubHomePageHeader.getText()).to.equal('Association');
    let currentUrl = browser.getUrl();
    expect(currentUrl).includes("/am.golf/organizations/");
});

Then(/^Tournament name should be "([^"]*)" at location "([^"]*)"$/, function (tournamentName: string, tournamentLocation: string) {
    const actualEventName = clubsAndOrganizations.getTournamentName();
    expect(actualEventName).to.equal(`${process.pid}:${tournamentName.toUpperCase()}`);
    const actualLocation = clubsAndOrganizations.getTournamentLocation();
    expect(actualLocation).to.equal('at ' + tournamentLocation);
});
