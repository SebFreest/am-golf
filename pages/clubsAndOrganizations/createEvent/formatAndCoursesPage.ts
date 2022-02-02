import { expect } from 'chai';

class FormatAndCourses {

    get tournamentFormatDropDown() { return $('//div[@id="/format"]'); }
    get tournamentFormatDropDownItems() { return $$('//ul/li//label'); }
    get addFormatBtn() { return $('//button//span[text()="Add Format"]'); }
    get tournamentFormatDropDownItemsByName() { return (value: string) => $(`//ul/li//label[text()=\'${value}\']`); }
    get addedCoursesList() { return (value: string) => $(`//div/label[text()=\'${value}\'][1]`); }
    get addCoursesBtn() { return $('//button//span[text()="Add Courses"]'); }
    get searchCoursesInput() { return $('//input[@id="outlined-search"]'); }
    get clearCoursesSearchInputIcon() { return $('div._2T0rw > div > div > div > svg > path'); }
    get addBtnCoursesModal() { return $('//button//span[text()="Add"]'); }
    get coursesList() { return (value: string) => $(`//div[@aria-label="grid"]//div[text()=\'${value}\']`) }
    get addedCoursesTag() { return (value: string) => $(`//div[@role="button"]/span[text()=\'${value}\']`); }
    get deleteBtnOfCourses() { return (value: string) => $(`//div/label[text()=\'${value}\'][1]/ancestor::div/button`); }
    get formatFieldByName() { return (fieldName: string) => $(`//div[@role="dialog"]//div/label[text()=\'${fieldName}\']/..//input`) }
    get formatDropDownByLabel() { return (label: string) => $(`//div/label[text()=\'${label}\']/..//div[@role="button"]`) }
    get formatModalDropDownItemsByName() { return (value: string) => $(`//ul/li//label[text()=\'${value}\']`); }
    get addedFormatDetails() { return $$('//h6[text()="Match formats"]/..//label'); }


    public tournamentDropDown = {
        values: ['Individual Stroke Play', 'Individual Match Play', 'Teams Match Play', 'Teams Stroke Play', 'Two Teams Cup', 'Pro AM']
    }

    public formatValues = {
        values: ['My Custom Format 1', 'Singles, Gross Strokes', 'Handicap: 100%, shots: 100%', 'Ties: Yes']
    }

    public verifyValuesOfTournamentFormat() {
        browser.waitUntil(() => this.tournamentFormatDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.tournamentFormatDropDownItems.forEach(item => {
            this.tournamentDropDown.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.tournamentDropDown.values.length).to.equal(countItems);
    }

    public selectTournamentFormat(value: string) {
        this.tournamentFormatDropDown.waitForClickable();
        this.tournamentFormatDropDown.click();
        browser.waitUntil(() => this.tournamentFormatDropDownItems[0].isDisplayed());
        return this.tournamentFormatDropDownItemsByName(value).click();
    }

    public isCoursesAdded(courseName: string) {
        return this.addedCoursesList(courseName).isDisplayed();
    }

    public selectCoursesByName(courseName: string) {
        this.searchCoursesInput.setValue(courseName);
        this.coursesList(courseName).waitForDisplayed();
        this.coursesList(courseName).click();
        this.clearCoursesSearchInputIcon.click();
    }

    public saveFormatDetailsFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInFormatDetails(label, value);
        }
    }

    public fillInFormatDetails(label: string, value: string) {
        switch (label) {
            case 'Name':
                this.formatFieldByName(label).waitForDisplayed();
                this.formatFieldByName(label).setValue(value);
                break;
            case 'Scoring type':
                this.formatDropDownByLabel(label).waitForDisplayed();
                this.formatDropDownByLabel(label).click();
                browser.waitUntil(() => this.tournamentFormatDropDownItems[0].isDisplayed());
                this.formatModalDropDownItemsByName(value).click();
                break;
            case 'Handicap':
                this.formatFieldByName(label).waitForDisplayed();
                while (this.formatFieldByName(label).getText() != "") {
                    browser.keys('Delete');
                }
                this.formatFieldByName(label).setValue(value);
                break;
            case 'Shots':
                this.formatFieldByName(label).waitForClickable();
                for (let i = 0; i < this.formatFieldByName(label).getText().length; i++) {
                    this.formatFieldByName(label).click();
                    browser.keys('Delete');
                }
                this.formatFieldByName(label).setValue(value);
                break;
            case 'Allow ties':
                this.formatDropDownByLabel(label).waitForDisplayed();
                this.formatDropDownByLabel(label).click();
                browser.waitUntil(() => this.tournamentFormatDropDownItems[0].isDisplayed());
                this.formatModalDropDownItemsByName(value).click();
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedFormatDetails() {
        let countItems = 0;
        browser.waitUntil(() => this.addedFormatDetails[0].isDisplayed() == true, {timeout: 5000});
        this.addedFormatDetails.forEach(item => {
            this.formatValues.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.formatValues.values.length).to.equal(countItems);
    }

}

export default new FormatAndCourses();