import { expect } from 'chai';

class DivisionsAndChampionshipSeries {

    get noDivisionsMessage() { return $('div:nth-child(2) > h5'); }
    get noChampionshipSeriesMessage() { return $('div:nth-child(3) > h5'); }
    get addDivisionsBtn() { return $('//button//span[text()="Add Division"]'); }
    get addChampionship() { return $('//button//span[text()="Add Championship"]'); }
    get divisionNameField() { return $('//input[@id="/name"]'); }
    get competitorsDropDown() { return $('//div[@id="/competitors"]'); }
    get competitorsDropDownItems() { return (value: string) => $(`//div[@id="menu-/competitors"]//ul/li//label[text()=\'${value}\']`); }
    get genderDropDown() { return $('//div[@id="/gender"]'); }
    get genderDropDownItems() { return (value: string) => $(`//div[@id="menu-/gender"]//ul/li//label[text()=\'${value}\']`); }
    get ageGroupDropDown() { return $('//div[@id="/ageGroup"]'); }
    get ageGroupDropDownItems() { return (value: string) => $(`//div[@id="menu-/ageGroup"]//ul/li//label[text()=\'${value}\']`); }
    get scoringTypeDropDown() { return $('//div[@id="/scoring"]'); }
    get scoringTypeDropDownItems() { return (value: string) => $(`//div[@id="menu-/scoring"]//ul/li//label[text()=\'${value}\']`); }
    get tiebreakTypeDropDown() { return $('//div[@id="/tiebreak"]'); }
    get tiebreakTypeDropDownItems() { return (value: string) => $(`//div[@id="menu-/tiebreak"]//ul/li//label[text()=\'${value}\']`); }
    get addDivisonChampionshipModalBtn() { return $('//button//span[text()="Add"]'); }
    get addedDivisionDetails() { return $$('//h6[text()="Divisions"]/..//label'); }
    get addedDivisionName() { return (value: string) => $(`//h6[text()="Divisions"]/..//label[text()=\'${value}\']`); }
    get saveDivisionDetailsBtn() { return $('//button[2]//span[text()="Save"]'); }
    get deleteBtnOfDivisions() { return (value: string) => $(`//div/label[text()=\'${value}\'][1]/ancestor::div/button`); }
    get addedDivisionsList() { return (value: string) => $(`//div/label[text()=\'${value}\'][1]`); }
    get eventTypeDropDown() { return $('//div[@id="/eventType"]'); }
    get eventTypeDropDownItems() { return (value: string) => $(`//div[@id="menu-/eventType"]//ul/li//label[text()=\'${value}\']`); }
    get searchChampionshipEventInput() { return $('//input[@id="outlined-search"]'); }
    get championshipEventList() { return (value: string) => $(`//div[@aria-label="grid"]//div/p[text()=\'${value}\']/../../../div`) }
    get addedChampionshipDetails() { return $$('//h6[text()="Championship series"]/..//label'); }
    get addChampionshipDialog() { return $('//div[@role="dialog"]//h2/span'); }



    public messages = {
        divisons: "No divisions added yet.",
        championshipSeries: "No championships added yet."
    }

    public expectedAddedDivision = {
        details: ['My New Division 1', 'Senior men, Stableford Gross Points', 'Standard Tees, Tiebreak: Most difficult holes']
    }

    public expectedEditedDivision = {
        details: ['My New Division 1', 'Senior men, Mod Stableford Points', 'Standard Tees, Tiebreak: Playoff']
    }

    public expectedAddedChampionship = {
        details: ['TGC Champion 2021', 'Type: Ranking points', 'Championship Finale, 500 points']
    }

    public checkNoDivisionsMessage() {
        this.noDivisionsMessage.waitForDisplayed();
        return expect(this.noDivisionsMessage.getText()).to.equal(this.messages.divisons);
    }

    public checkNoChampionshipSeriesMessage() {
        this.noChampionshipSeriesMessage.waitForDisplayed();
        return expect(this.noChampionshipSeriesMessage.getText()).to.equal(this.messages.championshipSeries);
    }

    public saveDivisonDetailsFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInDivisonDetails(label, value);
        }
    }

    public fillInDivisonDetails(label: string, value: string) {
        switch (label) {
            case 'Division Name':
                this.divisionNameField.waitForDisplayed();
                this.divisionNameField.setValue(value);
                break;
            case 'Competitors':
                browser.waitUntil(() => this.competitorsDropDown.isDisplayed() == true, {timeout: 5000});
                this.competitorsDropDown.click();
                browser.waitUntil(() => this.competitorsDropDownItems(value).isDisplayed() == true, {timeout: 5000});
                this.competitorsDropDownItems(value).click();
                break;
            case 'Gender':
                browser.waitUntil(() => this.genderDropDown.isDisplayed() == true, {timeout: 5000});
                this.genderDropDown.click();
                browser.waitUntil(() => this.genderDropDownItems(value).isDisplayed() == true, {timeout: 5000});
                this.genderDropDownItems(value).click();
                break;
            case 'Age Group':
                browser.waitUntil(() => this.ageGroupDropDown.isDisplayed() == true, {timeout: 5000});
                this.ageGroupDropDown.click();
                browser.waitUntil(() => this.ageGroupDropDownItems(value).isDisplayed() == true, {timeout: 5000});
                this.ageGroupDropDownItems(value).click();
                break;
            case 'Scoring Type':
                browser.waitUntil(() => this.scoringTypeDropDown.isDisplayed() == true, {timeout: 5000});
                this.scoringTypeDropDown.click();
                browser.waitUntil(() => this.scoringTypeDropDownItems(value).isDisplayed() == true, {timeout: 5000});
                this.scoringTypeDropDownItems(value).click();
                break;
            case 'Tiebreak':
                browser.waitUntil(() => this.tiebreakTypeDropDown.isDisplayed() == true, {timeout: 5000});
                this.tiebreakTypeDropDown.click();
                browser.waitUntil(() => this.tiebreakTypeDropDownItems(value).isDisplayed() == true, {timeout: 5000});
                this.tiebreakTypeDropDownItems(value).click();
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedDivisionDetails() {
        browser.waitUntil(() => this.addedDivisionDetails[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.addedDivisionDetails.forEach(item => {
            this.expectedAddedDivision.details.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedAddedDivision.details.length).to.equal(countItems);
    }

    public verifyAddedChampionshipDetails() {
        browser.waitUntil(() => this.addedChampionshipDetails[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.addedChampionshipDetails.forEach(item => {
            this.expectedAddedChampionship.details.forEach(value => {
                const textIt = item.getText();
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedAddedChampionship.details.length).to.equal(countItems);
    }

    public verifyEditedDivisionDetails() {
        browser.waitUntil(() => this.addedDivisionDetails[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.addedDivisionDetails.forEach(item => {
            this.expectedEditedDivision.details.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedEditedDivision.details.length).to.equal(countItems);
    }

    public clickOnAddedDivisionByName(value: string) {
        this.addedDivisionName(value).waitForClickable();
        this.addedDivisionName(value).click();
    }

    public isDivisionAdded(courseName: string) {
        return this.addedDivisionsList(courseName).isDisplayed();
    }

    public saveChampionshipDetailsFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInChampionshipDetails(label, value);
        }
    }

    public fillInChampionshipDetails(label: string, value: string) {
        switch (label) {
            case 'Event Type':
                browser.waitUntil(() => this.eventTypeDropDown.isDisplayed() ==true, {timeout: 5000});
                this.eventTypeDropDown.click();
                this.eventTypeDropDownItems(value).click();
                break;
            case 'Event Name':
                this.searchChampionshipEventInput.waitForDisplayed();
                this.searchChampionshipEventInput.setValue(value);
                browser.waitUntil(() => this.championshipEventList(value).waitForClickable());
                this.championshipEventList(value).click();
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }
}

export default new DivisionsAndChampionshipSeries();