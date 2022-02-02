import { expect } from 'chai';

class DescriptionAndSponsor {

    get descriptionInput() { return $('//textarea[@id="/description"]'); }
    get addSponsorBtn() { return $('//button//span[text()="Add Sponsors"]'); }
    get addBtnSponsorModal() { return $('//button//span[text()="Add"]'); }
    get searchSponsorInput() { return $('//input[@id="outlined-search"]'); }
    get clearSponsorSearchInputIcon() { return $('div._2T0rw > div > div > div > svg > path'); }
    get sponsorList() { return (value: string) => $(`//div[@aria-label="grid"]//div[text()=\'${value}\']`) }
    get addedSponsorsList() { return (value: string) => $(`//div/label[text()=\'${value}\'][1]`); }
    get addedSponsorsTag() { return (value: string) => $(`//div[@role="button"]/span[text()=\'${value}\']`); }
    get deleteBtnOfSponsor() { return (value: string) => $(`//div/label[text()=\'${value}\'][1]/ancestor::div/button`); }
    get addNewSponsorBtn() { return $('//button//span[text()="Add New"]') }
    get newSponsorFieldByName() { return (fieldName: string) => $(`//div/label[text()=\'${fieldName}\']/..//input`)}
    get addAddNewSponsorBtn() { return $('//div[5]//button/span[text()="Add"]'); }

    public setDescriptionText(descriptionText: string) {
        this.descriptionInput.waitForDisplayed();
        this.descriptionInput.setValue(descriptionText);
    }

    public selectSponsorByName(sponsorName: string) {
        this.searchSponsorInput.setValue(sponsorName);
        this.sponsorList(sponsorName).waitForDisplayed();
        this.sponsorList(sponsorName).click();
        this.clearSponsorSearchInputIcon.click();
    }

    public isSponsorAdded(sponsorName: string) {
        return this.addedSponsorsList(sponsorName).isDisplayed();
    }

    public saveSponsorDetailsFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInSponsorDetails(label, value);
        }
    }

    public fillInSponsorDetails(label: string, value: string) {
        switch (label) {
            case 'Name':
                this.newSponsorFieldByName(label).waitForDisplayed();
                this.newSponsorFieldByName(label).setValue(value);
                break;
            case 'Website':
                this.newSponsorFieldByName(label).waitForDisplayed();
                this.newSponsorFieldByName(label).setValue(value);
                break;
            case 'Details':
                this.newSponsorFieldByName(label).waitForDisplayed();
                this.newSponsorFieldByName(label).setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

}

export default new DescriptionAndSponsor();