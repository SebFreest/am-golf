import { expect } from 'chai';

class Registration {

    get registrationDropDown() { return $('//*[@id="/type"]/div/div/label[1]'); }
    get registrationDropDownExpand() { return $('//*[@id="/type"]'); }
    get registrationDropDownItems() { return $$('//*[@id="menu-/type"]/div/ul/li//label'); }
    get registrationDropDownItemsByName() { return (value: string) => $(`//div[@id="menu-/type"]//ul/li//label[text()=\'${value}\']`); }
    get openedRegistrationDropDown() { return $('//*[@id="menu-/type"]/div[3]'); }
    get invitationalMessage() { return $('//label[@id="/type-label"]/../../div/span') }
    get startDateInput() { return $('//*[@id="/start"]'); }
    get endDateInput() { return $('//*[@id="/end"]'); }
    get calendarLefArrow() { return $('//div[@class="MuiPickersCalendarHeader-switchHeader"]/button[1]'); }
    get calendarRightArrow() { return $('//div[@class="MuiPickersCalendarHeader-switchHeader"]/button[2]'); }
    get datePickerCloseBtn() { return $('//button/span[text()="Close"]'); }
    get typeDropDown() { return $('//*[@id="/waitingType"]/div/div/label[1]'); }
    get typeDropDownItems() { return $$('//*[@id="menu-/waitingType"]/div/ul/li//label'); }
    get visibilityDropDown() { return $('//*[@id="/waitingPrivacy"]/div/div/label[1]'); }
    get visibilityDropDownItems() { return $$('//*[@id="menu-/waitingPrivacy"]/div/ul/li//label'); }
    get anyTimeRadioBtn() { return $('//*[@id="/waitingTiming"]//span[text()="Anytime"]/ancestor::label//input'); }
    get beforItExpiresRadioBtn() { return $('//*[@id="/waitingTiming"]//span[text()="Before it expires"]') }
    get numberField() { return $('//*[@id="/waitingTime"]'); }
    get timeUnitField() { return $('//*[@id="/waitingUnit"]'); }
    get addInfoBtn() { return $('//button//span[text()="Add Info"]'); }
    get addDetailsBtn() { return $('//button//span[text()="Add Details"]'); }
    get requestSummaryInput() { return $('//label[text()="Request summary"]/..//input'); }
    get fullRequestInput() { return $('//label[text()="Full request"]/..//input'); }
    get answerTypeDropDown() { return $('//label[text()="Answer type"]/../div//label'); }
    get answerTypeDropDownItems() { return (value: string) => $(`//div[@id="menu-"]//ul/li//label[text()=\'${value}\']`); }
    get addAdditionalInfoModalBtn() { return $('//button//span[text()="Add"]'); }
    get saveAdditionalInfoModalBtn() { return $('//button[2]//span[text()="Save"]'); }
    get addedAdditionalInfo() { return $$('//div[text()="Additional info"]/..//label'); }
    get addedAdditionalInfoByName() { return (value: string) => $(`//div[text()="Additional info"]/..//label[text()=\'${value}\']`); }
    get addAdditionalInfoDialog() { return $('//div[@role="dialog"]//h2/span'); }
    get addChoiceBtn() { return $('//button//span[text()="Add Choice"]'); }
    get choiceNameInput() { return $('//label[text()="Choice name"]/..//input'); }
    get addChoiceNameBtn() { return $('//h6[text()="Choices"]/..//button/span[text()="Add"]'); }
    get addedChoiceByName() { return (value: string) => $(`//h6[text()="Choices"]/..//div[text()=\'${value}\']`); }
    get deleteChoiceByNameBtn() { return (value: string) => $(`//h6[text()="Choices"]/..//div[text()=\'${value}\']/../span`); }
    get deleteChoiceBtn() { return $('//span[text()="Delete"]'); }
    get addChampionshipDialog() { return $('//div[@role="dialog"]//h2/span'); }
    get deleteBtnOfAddedAdditionalInfo() { return (value: string) => $(`//div[text()="Additional info"]/..//label[text()=\'${value}\']/../../../button`); }
    get displayLinkAsInput() { return $('//label[text()="Display link as"]/..//input'); }
    get externalLinkInput() { return $('//label[text()="External link"]/..//input'); }
    get agreementTextInput() { return $('//label[text()="Agreement text"]/..//input'); }
    get addAgreementDialog() { return $('//div[@role="dialog"]//h2/span'); }
    get addedAggrementLabel() { return $$('//div[text()="Agreement details"]/..//label'); }
    get addedAgreementByName() { return (value: string) => $(`//div[text()="Agreement details"]/..//label[text()=\'${value}\']`); }
    get deleteBtnOfAddedAgreementInfo() { return (value: string) => $(`//div[text()="Agreement details"]/..//label[text()=\'${value}\']/../../../button`); }


    public registrationDropDownLabels = {
        values: ['Open', 'Anybody can register online for this event', 'Invitational', 'Only invited players can register online for this event', 'Members-only', 'Only club members can register online for this event', 'External', 'Online registration for this event is not allowed.']
    }

    public typeDropDownLabels = {
        values: ['Auto', 'Players will be notified automatically to register as particpants', 'Manual', 'Players will be notified by the admin to register as particpants']
    }

    public visibilityDropDownLabels = {
        values: ['Public', 'Players will be able to see the waiting list', 'Private', 'Only admins will be able to see the waiting list']
    }

    public expectedInvitationalMessage = {
        message: 'To manage the list of players that will receive invitations please go to the Participants section after creating the event.'
    }

    public expectedAdditionalInfo = {
        values: ['I want a personalized T-shirt', 'I want to see our club logo on T-shirt', 'Free Answer', 'Optional: No'],
        valuesWithSingleChoice: ['T-shirt size M', 'I want to see our club logo on T-shirt', 'Single Choice', 'Optional: No'],
        editedValues: ['Add Info draftedited', 'Mock textedited', 'Yes No', 'Optional: No']
    }

    public addedAggrement = {
        values: ['Best golf platform', 'https://staging.am.golf/', 'Welcome to your journey', 'Optional: No'],
        editedValues: ['Best golf platformEdited', 'https://staging.am.golf/home', 'Welcome to your journeyEdited', 'Optional: No']
    }

    public verifyRegistrationFieldValue(value: string) {
        browser.waitUntil(() => this.registrationDropDown.isDisplayed() == true, {timeout: 5000});
        expect(this.registrationDropDown.getText()).to.equal(value);
    }

    public openRegistrationDropDown() {
        this.registrationDropDown.waitForClickable();
        this.registrationDropDown.click();
    }

    public verifyValuesOfRegistrationDropDown() {
        browser.waitUntil(() => this.registrationDropDown.isDisplayed() == true);
        let countItems = 0;
        this.registrationDropDownItems.forEach(item => {
            this.registrationDropDownLabels.values.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.registrationDropDownLabels.values.length).to.equal(countItems);
    }

    public selectRegistrationByName(value: string) {
        browser.waitUntil(() => this.registrationDropDown.waitForDisplayed() == true, { timeout: 3000 });
        this.registrationDropDownExpand.click();
        browser.waitUntil(() => this.openedRegistrationDropDown.waitForDisplayed() == true, { timeout: 3000 });
        this.registrationDropDownItemsByName(value).click();
    }

    public verifyMessageForInvitational() {
        expect(this.invitationalMessage.isDisplayed()).to.equal(true);
        expect(this.invitationalMessage.getText()).to.equal(this.expectedInvitationalMessage.message);
    }

    public verifyCannotSelectStartDateFromThePast() {
        this.startDateInput.waitForClickable();
        this.startDateInput.click();
        expect(this.calendarLefArrow.getAttribute('class')).includes('disabled');
        this.datePickerCloseBtn.click();
    }

    public verifyCannotSelectEndDateFromThePast() {
        this.endDateInput.waitForClickable();
        this.endDateInput.click();
        expect(this.calendarLefArrow.getAttribute('class')).includes('disabled');
        this.datePickerCloseBtn.click();
    }

    public verifyTypeFieldValue(value: string) {
        this.typeDropDown.waitForDisplayed();
        expect(this.typeDropDown.getText()).to.equal(value);
    }

    public openTypeDropDown() {
        this.typeDropDown.waitForClickable();
        this.typeDropDown.click();
    }

    public verifyValuesOTypeDropDown() {
        browser.waitUntil(() => this.typeDropDown.isDisplayed() == true);
        let countItems = 0;
        this.typeDropDownItems.forEach(item => {
            this.typeDropDownLabels.values.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.typeDropDownLabels.values.length).to.equal(countItems);
    }

    public verifyVisibilityFieldValue(value: string) {
        this.visibilityDropDown.waitForDisplayed();
        expect(this.visibilityDropDown.getText()).to.equal(value);
    }

    public openVisibilityDropDown() {
        this.visibilityDropDown.waitForClickable();
        this.visibilityDropDown.click();
    }

    public verifyValuesOfVisibilityDropDown() {
        browser.waitUntil(() => this.visibilityDropDown.isDisplayed() == true);
        let countItems = 0;
        this.visibilityDropDownItems.forEach(item => {
            this.visibilityDropDownLabels.values.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.visibilityDropDownLabels.values.length).to.equal(countItems);
    }

    public isNumberFieldDisabled() {
        this.numberField.waitForDisplayed();
        return this.numberField.getAttribute('class').includes('disabled');
    }

    public isTimeUnitFieldDisabled() {
        this.timeUnitField.waitForDisplayed();
        return this.timeUnitField.getAttribute('class').includes('disabled');
    }

    public selectBeforeItExpires() {
        this.beforItExpiresRadioBtn.waitForClickable();
        return this.beforItExpiresRadioBtn.click();
    }

    public selectAddInfoButton() {
        this.addInfoBtn.waitForClickable();
        return this.addInfoBtn.click();
    }

    public selectAddDetailsButton() {
        this.addDetailsBtn.waitForClickable();
        this.addDetailsBtn.click();
    }

    public saveAdditionInfoFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInAdditionalInfo(label, value);
        }
    }

    public fillInAdditionalInfo(label: string, value: string) {
        switch (label) {
            case 'Request summary':
                this.requestSummaryInput.waitForDisplayed();
                this.requestSummaryInput.setValue(value);
                break;
            case 'Full request':
                this.fullRequestInput.waitForDisplayed();
                this.fullRequestInput.setValue(value);
                break;
            case 'Answer type':
                this.answerTypeDropDown.waitForClickable();
                this.answerTypeDropDown.click();
                this.answerTypeDropDownItems(value).click();
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public saveAddAgreementFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInAddAgreemantForm(label, value);
        }
    }

    public fillInAddAgreemantForm(label: string, value: string) {
        switch (label) {
            case 'Display link as':
                this.displayLinkAsInput.waitForDisplayed();
                this.displayLinkAsInput.setValue(value);
                break;
            case 'External link':
                this.externalLinkInput.waitForDisplayed();
                this.externalLinkInput.setValue(value);
                break;
            case 'Agreement text':
                this.agreementTextInput.waitForDisplayed();
                this.agreementTextInput.setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedAdditionalInfo() {
        browser.waitUntil(() => this.addAdditionalInfoDialog.isDisplayed() == false);
        let countItems = 0;
        this.addedAdditionalInfo.forEach(item => {
            this.expectedAdditionalInfo.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedAdditionalInfo.values.length).to.equal(countItems);
    }

    public selectAnswerTypeByName(value: string) {
        browser.waitUntil(() => this.answerTypeDropDown.waitForDisplayed() == true, { timeout: 3000 });
        this.answerTypeDropDown.click();
        this.answerTypeDropDownItems(value).click();
    }

    public isAddChoiceButtonDisplayed() {
        return this.addChoiceBtn.isDisplayed();
    }

    public addChoice(value: string) {
        this.addChoiceBtn.waitForClickable();
        this.addChoiceBtn.click();
        this.choiceNameInput.setValue(value);
        this.addChoiceNameBtn.waitForClickable();
        this.addChoiceNameBtn.click();
    }

    public isChoiceAdded(value: string) {
        return this.addedChoiceByName(value).isDisplayed();
    }

    public deleteChoice() {
        this.deleteChoiceBtn.waitForClickable();
        return this.deleteChoiceBtn.click();
    }

    public typeInRequestSummary(value: string) {
        this.requestSummaryInput.waitForDisplayed();
        return this.requestSummaryInput.setValue(value);
    }

    public typeInFullRequest(value: string) {
        this.fullRequestInput.waitForDisplayed();
        return this.fullRequestInput.setValue(value);
    }

    public selectSaveAdditionInfoBtnFromModal() {
        this.addAdditionalInfoModalBtn.waitForClickable();
        return this.addAdditionalInfoModalBtn.click();
    }

    public verifyAddedAdditionalInfoWithSingleChoice() {
        browser.waitUntil(() => this.addAdditionalInfoDialog.isDisplayed() == false);
        let countItems = 0;
        browser.pause(1000);
        this.addedAdditionalInfo.forEach(item => {
            this.expectedAdditionalInfo.valuesWithSingleChoice.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedAdditionalInfo.valuesWithSingleChoice.length).to.equal(countItems);
    }

    public openAdditionalInfo(value: string) {
        browser.pause(500);
        return this.addedAdditionalInfoByName(value).click();
    }

    public verifyEditedAdditionalInfo() {
        browser.waitUntil(() => this.addAdditionalInfoDialog.isDisplayed() == false);
        let countItems = 0;
        this.addedAdditionalInfo.forEach(item => {
            this.expectedAdditionalInfo.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedAdditionalInfo.editedValues.length).to.equal(countItems);
    }

    public deleteAdditionalInfo(value: string) {
        this.deleteBtnOfAddedAdditionalInfo(value).waitForClickable();
        return this.deleteBtnOfAddedAdditionalInfo(value).click();
    }

    public isAdditionalInfoAdded(value: string) {
        return this.deleteBtnOfAddedAdditionalInfo(value).isDisplayed();
    }

    public verifyAddedAgreementDetails() {
        browser.waitUntil(() => this.addAgreementDialog.isDisplayed() == false);
        let countItems = 0;
        browser.pause(1000);
        this.addedAggrementLabel.forEach(item => {
            this.addedAggrement.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.addedAggrement.values.length).to.equal(countItems);
    }

    public verifyEditedAgreementDetails() {
        browser.waitUntil(() => this.addAgreementDialog.isDisplayed() == false);
        let countItems = 0;
        browser.pause(1000);
        this.addedAggrementLabel.forEach(item => {
            this.addedAggrement.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.addedAggrement.editedValues.length).to.equal(countItems);
    }

    public openAggrementDetails(value: string) {
        return this.addedAgreementByName(value).click();
    }

    public deleteAddedAgreement(value: string) {
        this.deleteBtnOfAddedAgreementInfo(value).waitForClickable();
        return this.deleteBtnOfAddedAgreementInfo(value).click();
    }

    public isAgreementDetailsAdded(value: string) {
        return this.deleteBtnOfAddedAgreementInfo(value).isDisplayed();
    }

}

export default new Registration();