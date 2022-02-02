import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import Schedule from '../../../pages/clubsAndOrganizations/createEvent/schedulePage';


When(/^I select Add Schedule Item button$/, function () {
    Schedule.selectAddScheduleItemBtn();
});

When(/^I fill out the add schedule item details:$/, function (table) {
    Schedule.saveScheduleItemFromTable(table);
    if(Schedule.addScheduleItemModalBtn.isDisplayed()) {
        Schedule.addScheduleItemModalBtn.click();
        browser.waitUntil(() => Schedule.addScheduleItemModalBtn.isDisplayed() == false, {timeout: 5000});
    } else {
        Schedule.saveScheduleItemModalBtn.click();
        browser.waitUntil(() => Schedule.saveScheduleItemModalBtn.isDisplayed() == false, {timeout: 5000});
    }
});

When(/^I open the added schedule item "([^"]*)"$/, function (value: string) {
    Schedule.openAddedScheduleItem(value);
});

When(/^I delete "([^"]*)" from schedule item list$/, function (scheduleItem: string) {
    Schedule.deleteScheduleItem(scheduleItem);
});

Then(/^I should see no schedule added$/, function () {
    expect(Schedule.isNoScheduleMessageVisible()).to.equal(true);
});

Then(/^I should not be able to select start date from the past at schedule step$/, function () {
    Schedule.verifyCannotSelectStartDateFromThePast();
});

Then(/^I should not be able to select end date from the past at schedule step$/, function () {
    Schedule.verifyCannotSelectEndDateFromThePast();
});

Then(/^I should see the added schedule item with correct details$/, function () {
    Schedule.verifyAddedScheduleItem();
});

Then(/^I should see the edited schedule item with correct details$/, function () {
    Schedule.verifEditedScheduleItem();
});
