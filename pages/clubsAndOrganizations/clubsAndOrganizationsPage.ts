import { expect } from 'chai';

class ClubsAndOrganizations {
    get organizationSearchInput() { return $('input[id="outlined-search"]') }
    get organizationsList() { return (value: string) => $(`//div[@title=\'${value}\']`) }
    get clubsAndOrganizationsTab() { return $('div._35aDY > div > div > div._2MUZi > div:nth-child(2) > a[href="/am.golf/organizations.amg.html"]') }
    get addedTournaments() { return $$('[data-test-id=eventName] > div > p:nth-child(1)') }
    get searchOrganizationsInput() { return $('') }
    get cancelOrganizationBtn() { return $('//div[3]/div/div/div/button[1]/span[1]') }
    get tournamentPageHeader() { return $('//*[@id="main"]/main/div/div[1]/h5') }
    get eventName() { return $('//*[@id="main"]/main/div/div[2]/div[3]/div[1]/div[2]/span[1]') }
    get eventLocation() { return $('//*[@id="main"]/main/div/div[2]/div[3]/div[1]/div[2]/a')}
    get clubHomePageHeader() {return $('//div/h5')}

    public eventIdentifiers = {
        editEventHeaderName: 'Create event',
        savedEventMessage: 'The event details were successfully saved.',
        golfClubHeader: 'Golf Club',
        eventNameFieldErrMsg: 'A minimum of 3 characters is required.'
    };

    public selectClubByName(organizationName: string) {
        this.organizationSearchInput.setValue(organizationName);
        this.organizationsList(organizationName).waitForDisplayed()
        return this.organizationsList(organizationName).click();
    }

    public getTournamentName() {
        return this.eventName.getText();
    }

    public getTournamentLocation() {
        return this.eventLocation.getText();
    }

}

export default new ClubsAndOrganizations();