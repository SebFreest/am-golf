import {expect} from 'chai';
import {Then, When} from 'cucumber';
import golfClub from '../../pages/clubsAndOrganizations/golfClubPage'

const createEventUrl = '/home/edit_event.amg.html'


When(/^I select Events tab$/, function () {
    golfClub.eventsTab.waitForClickable();
    golfClub.eventsTab.click();
});

When(/^I select Add Events$/, function () {
    golfClub.addEventBtn.waitForClickable();
    golfClub.addEventBtn.click();
});

Then(/^I should not be able to edit the organization details$/, function () {
    expect(golfClub.editOrganizationBtn.isDisplayed()).to.equal(false);
});

Then(/^I should not be able to Add Events$/, function () {
    expect(golfClub.addEventBtn.isDisplayed()).to.equal(false);
});

Then(/^I should see the Create event page displayed$/, function () {
    golfClub.editEventH5.waitForDisplayed();
    expect(golfClub.editEventH5.getText()).to.equal(golfClub.eventIdentifiers.editEventHeaderName);
    let currentUrl = browser.getUrl();
    expect(currentUrl).includes(createEventUrl);
});
