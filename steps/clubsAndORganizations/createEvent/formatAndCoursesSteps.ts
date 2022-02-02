import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import FormatAndCourses from '../../../pages/clubsAndOrganizations/createEvent/formatAndCoursesPage';


When(/^I open Tournament Format drop-down$/, function () {
    FormatAndCourses.tournamentFormatDropDown.waitForClickable();
    FormatAndCourses.tournamentFormatDropDown.click();
    browser.waitUntil(() => FormatAndCourses.tournamentFormatDropDownItems[0].isDisplayed());
});

When(/^I should see the correct values in the Tournament Format field$/, function () {
    FormatAndCourses.verifyValuesOfTournamentFormat();
});

When(/^I select "([^"]*)" from Tournament Format$/, function (value: string) {
    FormatAndCourses.selectTournamentFormat(value);
});

When(/^I should see Add Format option$/, function () {
    expect(FormatAndCourses.addFormatBtn.isDisplayed()).to.equal(true);
});

When(/^I should not see Add Format option$/, function () {
    expect(FormatAndCourses.addFormatBtn.isDisplayed()).to.equal(false);
});

When(/^I select Add Courses button$/, function () {
    FormatAndCourses.addCoursesBtn.waitForClickable();
    FormatAndCourses.addCoursesBtn.click();
});

When(/^I select Add Format button$/, function () {
    FormatAndCourses.addFormatBtn.waitForClickable();
    FormatAndCourses.addFormatBtn.click();
});

When(/^I mark "([^"]*)" to add as course$/, function (courseName: string) {
    FormatAndCourses.addBtnCoursesModal.waitForDisplayed();
    FormatAndCourses.selectCoursesByName(courseName);
});

When(/^I add "([^"]*)" as course$/, function (courseName: string) {
    FormatAndCourses.addBtnCoursesModal.waitForDisplayed();
    FormatAndCourses.selectCoursesByName(courseName);
    browser.waitUntil(() => FormatAndCourses.addedCoursesTag(courseName).isDisplayed(), {timeout: 1000});
    FormatAndCourses.addBtnCoursesModal.click();
});

When(/^I Add all the selected courses$/, function () {
    FormatAndCourses.addBtnCoursesModal.waitForDisplayed();
    FormatAndCourses.addBtnCoursesModal.click();
});

When(/^I delete "([^"]*)" from courses list$/, function (courseName: string) {
    browser.waitUntil(() => FormatAndCourses.deleteBtnOfCourses(courseName).waitForDisplayed(), {timeout:1000});
    FormatAndCourses.deleteBtnOfCourses(courseName).click();
});

When(/^I fill out the custom format details:$/, function (table) {
    FormatAndCourses.saveFormatDetailsFromTable(table);
    FormatAndCourses.addBtnCoursesModal.click();
});

When(/^I delete "([^"]*)" from formats list$/, function (formatName: string) {
    browser.waitUntil(() => FormatAndCourses.deleteBtnOfCourses(formatName).waitForDisplayed(), {timeout:1000});
    FormatAndCourses.deleteBtnOfCourses(formatName).click();
});

Then(/^I should see "([^"]*)" added by default to courses$/, function (course: string) {
    browser.waitUntil(() => FormatAndCourses.addedCoursesList(course).isDisplayed(), { timeout: 5000 });
    expect(FormatAndCourses.isCoursesAdded(course)).to.equal(true);
});

Then(/^I should see "([^"]*)" added to courses list$/, function (course: string) {
    browser.waitUntil(() => FormatAndCourses.addedCoursesList(course).isDisplayed(), { timeout: 5000 });
    expect(FormatAndCourses.isCoursesAdded(course)).to.equal(true);
});

Then(/^I should not see "([^"]*)" added to courses list$/, function (course: string) {
    expect(FormatAndCourses.isCoursesAdded(course)).to.equal(false);
});

Then(/^I should not see "([^"]*)" added to formats list$/, function (course: string) {
    expect(FormatAndCourses.isCoursesAdded(course)).to.equal(false);
});

Then(/^I should see the added format with correct details$/, function () {
    FormatAndCourses.verifyAddedFormatDetails();
});

