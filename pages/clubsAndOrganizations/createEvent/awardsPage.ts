import { expect } from 'chai';

class Awards {

    get noGeneralAwardsMessage() { return $('//div[text()="General Awards"]/../../h5'); }
    get noSpecialAwardsMessage() { return $('//div[text()="Special Awards"]/../../h5'); }
    get addGeneralAwardsBtn() { return $('//div[text()="General Awards"]/../..//button//span[text()="Add award"]'); }
    get addSpecialAwardsBtn() { return $('//div[text()="Special Awards"]/../..//button//span[text()="Add award"]'); }
    get addAwardsModalBtn() { return $('//button//span[text()="Add"]'); }
    get saveAwardsModalBtn() { return $('//button[2]//span[text()="Save"]'); }
    get awardNameInput() { return $('//*[@id="/name"]'); }
    get awardDescrpitionInput() { return $('//*[@id="/description"]'); }
    get addGeneralAwardsDialog() { return $('//div[@role="dialog"]//h2/span'); }
    get addedGeneralAwards() { return $$('//div[text()="General Awards"]/../..//label'); }
    get addedSpecialAwards() { return $$('//div[text()="Special Awards"]/../..//label'); }
    get addedGeneralAwardByName() { return (value: string) => $(`//div[text()="General Awards"]/../..//label[text()=\'${value}\']`); }
    get deleteBtnOfGeneralAwards() { return (value: string) => $(`//div[text()="General Awards"]/../..//label[text()=\'${value}\']/../../../button`)}
    get addedSpecialAwardByName() { return (value: string) => $(`//div[text()="Special Awards"]/../..//label[text()=\'${value}\']`); }
    get deleteBtnOfSpecialAwards() { return (value: string) => $(`//div[text()="Special Awards"]/../..//label[text()=\'${value}\']/../../../button`)}

    public expectedGeneralAwards = {
        values: ['My General Awards 1', 'This is a bot who adds awards item'],
        editedValues: ['My General Awards 2Edited', 'This is a bot who adds awards itemEdited']
    }

    public expectedSpecialAwards = {
        values: ['My Special Awards 1', 'This is a bot who adds awards item'],
        editedValues: ['My Special Awards 2Edited', 'This is a bot who adds awards itemEdited']
    }

    public isNoGeneralAwardsMessageVisible() {
        this.noGeneralAwardsMessage.waitForDisplayed();
        return this.noGeneralAwardsMessage.isDisplayed();
    }

    public isNoSpecialAwardsMessageVisible() {
        this.noSpecialAwardsMessage.waitForDisplayed();
        return this.noSpecialAwardsMessage.isDisplayed();
    }

    public selectAddGeneralAwardsBtn() {
        this.addGeneralAwardsBtn.waitForClickable();
        return this.addGeneralAwardsBtn.click();
    }

    public selectAddSpecialAwardsBtn() {
        this.addSpecialAwardsBtn.waitForClickable();
        return this.addSpecialAwardsBtn.click();
    }

    
    public saveGeneralAwardsFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInGeneralAwards(label, value);
        }
    }

    public fillInGeneralAwards(label: string, value: string) {
        switch (label) {
            case 'Award Name':
                browser.pause(500);
                this.awardNameInput.waitForDisplayed();
                this.awardNameInput.setValue(value);
                break;
            case 'Description':
                this.awardDescrpitionInput.waitForDisplayed();
                this.awardDescrpitionInput.setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedGeneralAwards() {
        browser.waitUntil(() => this.addGeneralAwardsDialog.isDisplayed() == false);
        let countItems = 0;
        this.addedGeneralAwards.forEach(item => {
            this.expectedGeneralAwards.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedGeneralAwards.values.length).to.equal(countItems);
    }

    public openAddedGeneralAward(value: string) {
        return this.addedGeneralAwardByName(value).click();
    }

    public verifEditedGeneralAwards() {
        browser.waitUntil(() => this.addGeneralAwardsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedGeneralAwards.forEach(item => {
            this.expectedGeneralAwards.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedGeneralAwards.editedValues.length).to.equal(countItems);
    }

    public deleteGeneralAwards(value: string) {
        this.deleteBtnOfGeneralAwards(value).waitForClickable();
        return this.deleteBtnOfGeneralAwards(value).click();
    }

    public deleteSpecialAwards(value: string) {
        this.deleteBtnOfSpecialAwards(value).waitForClickable();
        return this.deleteBtnOfSpecialAwards(value).click();
    }

    public verifyAddedSpecialAwards() {
        browser.waitUntil(() => this.addGeneralAwardsDialog.isDisplayed() == false);
        let countItems = 0;
        this.addedSpecialAwards.forEach(item => {
            this.expectedSpecialAwards.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedSpecialAwards.values.length).to.equal(countItems);
    }

    public openAddedSpecialAward(value: string) {
        return this.addedSpecialAwardByName(value).click();
    }

    public verifEditedSpecialAwards() {
        browser.waitUntil(() => this.addGeneralAwardsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedSpecialAwards.forEach(item => {
            this.expectedSpecialAwards.editedValues.forEach(value => {
                const textIt = item.getText();
                console.log(textIt);
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedSpecialAwards.editedValues.length).to.equal(countItems);
    }


}

export default new Awards();