import { expect } from 'chai';

class FeesAndOptions {

    get noTournamentFeesMessage() { return $('//h6[text()="Tournament fees"]/../h5'); }
    get noAccomodationOptionsMessage() { return $('//h6[text()="Accomodation options"]/../h5'); }
    get noOtherServicesMessage() { return $('//h6[text()="Other services"]/../h5'); }
    get noPrivateDiscountsMessage() { return $('//h6[text()="Private discounts"]/../h5'); }
    get currencyDropDown() { return $('//label[text()="Currency"]/../div/div'); }
    get currencyDropDownValues() { return $$('//ul/li//label'); }
    get currencyDropDownValuesByName() { return (value: string) => $(`//ul/li//label[text()=\'${value}\']`); }
    get addTournamentFeeBtn() { return $('//button//span[text()="Add tournament fee"]'); }
    get addAccomodationBtn() { return $('//button//span[text()="Add Accomodation"]'); }
    get addServiceBtn() { return $('//button//span[text()="Add Service"]'); }
    get addIndividualBtn() { return $('//button//span[text()="Add Individual"]'); }
    get addGroupBtn() { return $('//button//span[text()="Add Group"]'); }
    get tournamentFeePriceInput() { return $('//*[@id="/price"]'); }
    get tournamentFeeDescriptionInput() { return $('//*[@id="/description"]'); }
    get addBtnOfFeesAndOptionsModal() { return $('//button//span[text()="Add"]'); }
    get saveBtnOfFeesAndOptionsModal() { return $('//button[2]//span[text()="Save"]'); }
    get addFeesAndOptionsDialog() { return $('//div[@role="dialog"]//h2/span'); }
    get addedTournamentFee() { return $$('//h6[text()="Tournament fees"]/../..//div[2]//label'); }
    get addedTournamentFeeByName() { return (value: string) => $(`//h6[text()="Tournament fees"]/../..//label[text()=\'${value}\']`); }
    get addPublicDiscountBtn() { return $('//button//span[text()="Add public discount"]'); }
    get discountInput() { return $('//*[@id="/discount"]'); }
    get addTournamentDiscountClubSearchInput() { return $('//*[@id="outlined-search"]'); }
    get clubsListFromDiscountModal() { return (value: string) => $(`//div[@aria-label="grid"]//div[text()=\'${value}\']`) }
    get deleteBtnOfTournamentFee() { return (value: string) => $(`//h6[text()="Tournament fees"]/../..//label[text()=\'${value}\']/../../../button`) }
    get whereAccomodationInput() { return $('//*[@id="/location"]'); }
    get accomodationNameInput() { return $('//*[@id="/name"]'); }
    get accomodationDescriptionInput() { return $('//*[@id="/description"]'); }
    get accomodationPriceInput() { return $('//*[@id="/price"]'); }
    get accomodationQuantityInput() { return $('//*[@id="/quantity"]'); }
    get addedAccomodationByName() { return (value: string) => $(`//h6[text()="Accomodation options"]/..//label[text()=\'${value}\']`); }
    get addedAccomodation() { return $$('//h6[text()="Accomodation options"]/..//label'); }
    get deleteBtnOfAccomodation() { return (value: string) => $(`//h6[text()="Accomodation options"]/..//label[text()=\'${value}\']/../../../button`); }
    get serviceTypeDropDown() { return $('//*[@id="/type"]'); }
    get servicePriceInput() { return $('//*[@id="/price"]'); }
    get serviceQuantityInput() { return $('//*[@id="/quantity"]'); }
    get serviceTypeDropDownValuesByName() { return (value: string) => $(`//ul/li//label[text()=\'${value}\']`); }
    get addedServices() { return $$('//h6[text()="Other services"]/..//label'); }
    get addedServicesByName() { return (value: string) => $(`//h6[text()="Other services"]/..//label[text()=\'${value}\']`); }
    get deleteBtnOfServices() { return (value: string) => $(`//h6[text()="Other services"]/..//label[text()=\'${value}\']/../../../button`); }
    get individualDiscountNameInput() { return $('//*[@id="/name"]'); }
    get individualDiscountInput() { return $('//*[@id="/discount"]'); }
    get individualDiscountSearchInput() { return $('//*[@id="outlined-search"]'); }
    get individualDiscountForPlayer() { return (value: string) => $(`//div[@role="grid"]//div[text()=\'${value}\']`); }
    get addedIndividualDiscount() { return $$('//h6[text()="Private discounts"]/..//label'); }
    get addedIndividualDiscountByName() {return (value: string) => $(`//h6[text()="Private discounts"]/..//label[text()=\'${value}\']`); }
    get deleteBtnOfIndividualDiscount() { return (value: string) => $(`//h6[text()="Private discounts"]/..//label[text()=\'${value}\']/../../../button`); }

    public expectedFeesValues = {
        valuesWithNoDescription: ['Standard Fee', '150 PLN'],
        editedValues: ['My General Awards 2Edited', 'This is a bot who adds awards itemEdited']
    }

    public expectedAccomodation = {
        values: ['Sun Garden Resort', 'Check-in after 14pm', '500 RON', 'room/night', 'x3'],
        editedValues: ['Sun Garden ResortEdited', 'Check-in after 14pmEdited', '300 QAR', 'room/night', 'x5']
    }

    public expectedServices = {
        values: ['Practice Balls', '200 RON', 'x100'],
        editedValues: ['Push Trolley', '50 RON', 'x2']
    }

    public expectedIndividualDiscount = {
        values: ['Loyality discount', '-15%', 'Denis Staykov'],
        editedValues: ['Loyality discountEdited', '-50%', 'Denis Staykov']
    }

    public expectedGroupDiscount = {
        values: ['Club discount', '-15%', 'Magyar Golf Club'],
        editedValues: ['Club discountEdited', '-50%', 'Reiters Golfschaukel']
    }


    public checkNoFeesMessages(message: string) {
        if (message == "tournament fees") {
            const myTmp1 = this.noTournamentFeesMessage.isDisplayed();
            expect(this.noTournamentFeesMessage.isDisplayed()).to.equal(true);
            expect(this.noTournamentFeesMessage.getText()).to.equal('No fee(s) added yet.');
        }
        if (message == "accomodation options") {
            const myTmp2 = this.noAccomodationOptionsMessage.isDisplayed();
            expect(this.noAccomodationOptionsMessage.isDisplayed()).to.equal(true);
            expect(this.noAccomodationOptionsMessage.getText()).to.equal('No accomodation option(s) added yet.');
        }
        if (message == "other services") {
            const myTmp3 = this.noOtherServicesMessage.isDisplayed();
            expect(this.noOtherServicesMessage.isDisplayed()).to.equal(true);
            expect(this.noOtherServicesMessage.getText()).to.equal('No service(s) added yet.');
        }
        if (message == "Private discount") {
            const myTmp4 = this.noPrivateDiscountsMessage.isDisplayed();
            expect(this.noPrivateDiscountsMessage.isDisplayed()).to.equal(true);
            expect(this.noPrivateDiscountsMessage.getText()).to.equal('No discount option(s) added yet.');
        }
    }

    public openCurrencyDropDown() {
        browser.waitUntil(() => this.currencyDropDown.waitForClickable(), { timeout: 1000 });
        return this.currencyDropDown.click();
    }

    public verifyValuesOfCurrencyDropDown() {
        this.currencyDropDownValues[0].waitForDisplayed();
        expect(this.currencyDropDownValues.length).to.equal(152);
    }

    public selectFeesButtonsByName(buttonName: string) {
        if (buttonName == "Add tournament fee") {
            this.addTournamentFeeBtn.waitForClickable();
            return this.addTournamentFeeBtn.click();
        }
        if (buttonName == "Add Accomodation") {
            this.addAccomodationBtn.waitForClickable();
            return this.addAccomodationBtn.click();
        }
        if (buttonName == "Add Service") {
            this.addServiceBtn.waitForClickable();
            return this.addServiceBtn.click();
        }
        if (buttonName == "Add Individual") {
            this.addIndividualBtn.waitForClickable();
            return this.addIndividualBtn.click();
        }
        if (buttonName == "Add Group") {
            this.addGroupBtn.waitForClickable();
            return this.addGroupBtn.click();
        }

        if (buttonName == "Add public discount") {
            this.addPublicDiscountBtn.waitForClickable();
            return this.addPublicDiscountBtn.click();
        }
    }

    public selectCurrencyByName(currencyName: string) {
        this.openCurrencyDropDown();
        return this.currencyDropDownValuesByName(currencyName).click();
    }

    public saveTournamentFeeFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInTournamentFee(label, value);
        }
    }

    public fillInTournamentFee(label: string, value: string) {
        switch (label) {
            case 'Price':
                browser.pause(500);
                this.tournamentFeePriceInput.waitForDisplayed();
                this.tournamentFeePriceInput.setValue(value);
                break;
            case 'Description':
                this.tournamentFeeDescriptionInput.waitForDisplayed();
                this.tournamentFeeDescriptionInput.setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedTournamentFeeWithNoDescription() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        let countItems = 0;
        this.addedTournamentFee.forEach(item => {
            this.expectedFeesValues.valuesWithNoDescription.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedFeesValues.valuesWithNoDescription.length).to.equal(countItems);
    }

    public openAddedTournamentFee(value: string) {
        return this.addedTournamentFeeByName(value).click();
    }

    public checkDiscountButtonVisibility() {
        browser.waitUntil(() => this.addPublicDiscountBtn.isDisplayed() == true);
        return this.addPublicDiscountBtn.isDisplayed();
    }

    public saveDiscountDetailsFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInDiscountModal(label, value);
        }
    }

    public fillInDiscountModal(label: string, value: string) {
        switch (label) {
            case 'Discount':
                browser.pause(500);
                this.discountInput.waitForDisplayed();
                this.discountInput.setValue(value);
                break;
            case 'Club':
                this.addTournamentDiscountClubSearchInput.waitForDisplayed();
                this.addTournamentDiscountClubSearchInput.setValue(value);
                browser.waitUntil(() => this.clubsListFromDiscountModal(value).waitForClickable());
                this.clubsListFromDiscountModal(value).click();
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedDiscount(discount: string, clubName: string) {
        expect(this.addedTournamentFeeByName(discount).isDisplayed()).to.equal(true);
        expect(this.addedTournamentFeeByName(clubName).isDisplayed()).to.equal(true);
    }

    public deleteTournamentFee(value: string) {
        this.deleteBtnOfTournamentFee(value).waitForClickable();
        return this.deleteBtnOfTournamentFee(value).click();
    }

    public verifyNoDiscountForClub(clubName: string) {
        return this.addedTournamentFeeByName(clubName).isDisplayed();
    }

    public saveAccomodationFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInAccomodationModal(label, value);
        }
    }

    public fillInAccomodationModal(label: string, value: string) {
        switch (label) {
            case 'Where':
                browser.pause(500);
                this.whereAccomodationInput.waitForDisplayed();
                this.whereAccomodationInput.setValue(value);
                break;
            case "Acommodation name":
                this.accomodationNameInput.waitForDisplayed();
                this.accomodationNameInput.setValue(value);
                break;
            case 'Description':
                this.accomodationDescriptionInput.waitForDisplayed();
                this.accomodationDescriptionInput.setValue(value);
                break;
            case "Price":
                this.accomodationPriceInput.waitForDisplayed();
                this.accomodationPriceInput.setValue(value);
                break;
            case "Quantity":
                this.accomodationQuantityInput.waitForDisplayed();
                this.accomodationQuantityInput.setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedAccomodation() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedAccomodation.forEach(item => {
            this.expectedAccomodation.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedAccomodation.values.length).to.equal(countItems);
    }

    public openAddedAccomodationOption(value: string) {
        return this.addedAccomodationByName(value).click();
    }

    public verifyEditedAccomodation() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedAccomodation.forEach(item => {
            this.expectedAccomodation.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedAccomodation.editedValues.length).to.equal(countItems);
    }

    public deleteAccomodation(value: string) {
        this.deleteBtnOfAccomodation(value).waitForClickable();
        return this.deleteBtnOfAccomodation(value).click();
    }

    public saveOtherServiceFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInOtherServiceModal(label, value);
        }
    }

    public fillInOtherServiceModal(label: string, value: string) {
        switch (label) {
            case 'Service Type':
                browser.pause(500);
                this.serviceTypeDropDown.waitForDisplayed();
                this.serviceTypeDropDown.click();
                this.serviceTypeDropDownValuesByName(value).click();
                break;
            case "Price":
                this.servicePriceInput.waitForDisplayed();
                this.servicePriceInput.setValue(value);
                break;
            case "Quantity":
                this.serviceQuantityInput.waitForDisplayed();
                this.serviceQuantityInput.setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedServices() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedServices.forEach(item => {
            this.expectedServices.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedServices.values.length).to.equal(countItems);
    }

    public verifyEditedServices() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedServices.forEach(item => {
            this.expectedServices.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedServices.editedValues.length).to.equal(countItems);
    }

    public openAddedServices(value: string) {
        return this.addedServicesByName(value).click();
    }

    public deleteService(value: string) {
        this.deleteBtnOfServices(value).waitForClickable();
        return this.deleteBtnOfServices(value).click();
    }

    public saveIndividualDiscountFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInIndividualDiscountModal(label, value);
        }
    }

    public fillInIndividualDiscountModal(label: string, value: string) {
        switch (label) {
            case 'Name':
                browser.pause(500);
                this.individualDiscountNameInput.waitForDisplayed();
                this.individualDiscountNameInput.setValue(value);
                break;
            case "Discount":
                this.individualDiscountInput.waitForDisplayed();
                this.individualDiscountInput.setValue(value);
                break;
            case "Assing to members":
                this.individualDiscountSearchInput.setValue(value);
                this.individualDiscountForPlayer(value).waitForDisplayed();
                this.individualDiscountForPlayer(value).click();
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedIndividualDiscount() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedIndividualDiscount.forEach(item => {
            this.expectedIndividualDiscount.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedIndividualDiscount.values.length).to.equal(countItems);
    }

    public openAddedIndividualDiscount(value: string) {
        return this.addedIndividualDiscountByName(value).click();
    }

    public verifyEditedIndividualDiscount() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedIndividualDiscount.forEach(item => {
            this.expectedIndividualDiscount.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedIndividualDiscount.editedValues.length).to.equal(countItems);
    }

    public deleteIndividualDiscount(value: string) {
        this.deleteBtnOfIndividualDiscount(value).waitForClickable();
        return this.deleteBtnOfIndividualDiscount(value).click();
    }

    public verifyAddedGroupDiscount() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedIndividualDiscount.forEach(item => {
            this.expectedGroupDiscount.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedGroupDiscount.values.length).to.equal(countItems);
    }

    public verifyEditedGroupDiscount() {
        browser.waitUntil(() => this.addFeesAndOptionsDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedIndividualDiscount.forEach(item => {
            this.expectedGroupDiscount.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
                browser.pause(500);
            })
        })
        expect(this.expectedGroupDiscount.editedValues.length).to.equal(countItems);
    }

}

export default new FeesAndOptions();