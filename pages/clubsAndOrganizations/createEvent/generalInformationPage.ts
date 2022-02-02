import { expect } from 'chai';

class GeneralInformation {

    get eventNameInput() { return $('input[data-test-id=eventNameField]') }
    get saveEventBtn() { return $('//button/span[text()="Save"]') }
    get cancelEventBtn() { return $('//div/span[text()="Cancel"]') }
    get confirmCreateEvPopUpBtn() { return $('//button/span[text()="Create"]') }
    get eventRegistriationStep() { return $('//ul//div/span[contains(text(),"Registration")]') }
    get addAnotherClubBtn() { return $('[data-test-id=addNewClub]') }
    get clubsSearchInput() { return $('//*[@id="outlined-search"]') }
    get addOrganizationBtn() { return $('//button/span[text()="Add"]/..') }
    get cancelAddOrganizationBtn() { return $('//button/span[text()="Cancel"]') }
    get eventNameErrorMessage() { return $('//*[@id="/name-helper-text"]/span') }
    get addedOrganizations() { return $$('//div[@class="_1Ppea _1zJJJ "]') }
    get addedOrganizationsList() { return $('div._2WeDK') }
    get addedClubDeleteBtn() { return $('div._2WeDK > div:nth-child(3) > span') }
    get confirmDeleteBtn() { return $('//div/button/span[text()="Delete"]') }
    get deleteBtnOfClub() { return (clubName: string) => $(`//div[text()=\'${clubName}\']/../../../..//div/span[text()="Delete"]`) }
    get organizationsList() { return (value: string) => $(`//div[@aria-label="grid"]//div[text()=\'${value}\']`) }
    get addedOrganizersList() { return (value: string) => $(`//div[text()=\'${value}\']`) }
    get confirmDeletePopUp() { return $('//h2/span') }
    get addOrganizersModal() { return $('//h2/span[text()="Add organizer"]') }
    get eventTypeDropDown() {return $('//*[@id="/type"]')}
    get eventVisibilityDropDown() {return $('//*[@id="/visibility"]')}
    get eventRegistrationDropDown() {return $('//*[@id="/registration"]')}
    get eventVisibilityDropDownItems() { return $$('//*[@id="menu-/visibility"]/div/ul/li//label')}
    get eventTypeDropdownItems() { return $$('//*[@id="menu-/type"]/div/ul/li//label'); }
    get eventRegistrationDropdownItems() { return $$('//*[@id="menu-/registration"]/div/ul/li//label'); }
    get eventType() { return (value: string) => $(`//*[@id="menu-/type"]/div/ul/li//label[text()=\'${value}\']`); }
    get registrationSteps() { return $$('//*[@id="main"]/div/div[2]/div[1]/div[1]/ul/div/div/span'); }
    get startDateInput() { return $('//*[@id="/startDate"]'); }
    get endDateInput() { return $('//*[@id="/endDate"]'); }
    get calendarLefArrow() { return $('//div[@class="MuiPickersCalendarHeader-switchHeader"]/button[1]'); }
    get calendarRightArrow() { return $('//div[@class="MuiPickersCalendarHeader-switchHeader"]/button[2]'); }
    get datePickerCloseBtn() { return $('//button/span[text()="Close"]'); }
    get registrationStepByName() { return(value: string) => $(`//*[@id="main"]//ul/div/div/span[text()=\'${value}\']`); }

    public eventIdentifiers = {
        editEventHeaderName: 'Create event',
        savedEventMessage: 'The event details were successfully saved.',
        golfClubHeader: 'Golf Club',
        eventNameFieldErrMsg: 'A minimum of 3 characters is required.',
        deletePopUpMessage: 'Deleting an organiser will only become public after you save the changes you made to this event. Until then, deleting an organiser will be in a draft state.'
    };

    public eventTypeLabels = {
        labels: ['Tournament', 'Golf tournament for individual players or teams', 'Championship Series', 'Championship series consisting of multiple tournaments', 'Other event', 'Any other golf event']
    }

    public eventVisibilityLabels = {
        labels: ['Public', 'Everybody can access this page', 'Private', 'Only participants can access this page', 'Restricted', 'Only Admins can access this page']
    }

    public eventRegistrationLabels = {
        labels: ['Open', 'Anybody can register online for this event', 'Invitational', 'Only invited players can register online for this event', 'Members-only', 'Only club members can register online for this event', 'External', 'Online registration for this event is not allowed.']
    }

    public openEventVisibilityDropDown() {
        browser.waitUntil(() => this.eventVisibilityDropDown.waitForClickable(), {timeout: 1000});
        return this.eventVisibilityDropDown.click();
    }

    public setEventName(eventName: string) {
        this.eventNameInput.waitForDisplayed();
        this.eventNameInput.setValue(`${process.pid}:${eventName}`);
    }

    public selectOrganizationsByName(organizationsName: string) {
        this.clubsSearchInput.setValue(organizationsName);
        this.organizationsList(organizationsName).waitForDisplayed();
        return this.organizationsList(organizationsName).click();;
    }

    public isOrganizerAdded(organizationName: string) {
        return this.addedOrganizersList(organizationName).isDisplayed();
    }

    public verifyOrganizationIsNotInTheOrganizersList(organizationName: string) {
        browser.pause(1000);
        this.addedOrganizations.every(item => {
            if (item.getText() === organizationName) {
                expect(item.isDisplayed()).to.equal(false);
            }
        });
    }

    public deleteOrganizerByName(organizationName: string) {
        this.deleteBtnOfClub(organizationName).waitForClickable();
        return this.deleteBtnOfClub(organizationName).click();
    }

    public verifyValuesOfEventType() {
        browser.waitUntil(() => this.eventTypeDropdownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.eventTypeDropdownItems.forEach(item => {
            this.eventTypeLabels.labels.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.eventTypeLabels.labels.length).to.equal(countItems);
    }

    public verifyValuesOfEventVisibility() {
        browser.waitUntil(() => this.eventVisibilityDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.eventVisibilityDropDownItems.forEach(item => {
            this.eventVisibilityLabels.labels.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.eventVisibilityLabels.labels.length).to.equal(countItems);
    }

    public verifyValuesOfEventRegistration() {
        browser.waitUntil(() => this.eventRegistrationDropdownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.eventRegistrationDropdownItems.forEach(item => {
            this.eventRegistrationLabels.labels.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.eventRegistrationLabels.labels.length).to.equal(countItems);
    }

    public selectEventTypeByName(eventTypeName: string) {
        return this.eventType(eventTypeName).click();
    }

    public selectRegistrationStepByName(stepName: string) {
        this.registrationStepByName(stepName).waitForClickable();
        return this.registrationStepByName(stepName).click();
    }

}

export default new GeneralInformation();