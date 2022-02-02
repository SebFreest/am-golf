class golfClub {
    get eventsTab() { return $('[data-test-id=tabbutton-Events] > span > div')}
    get addEventBtn() { return $('//button/span[text()="Add Event"]')}
    get editOrganizationBtn() { return $('//*[@id="main"]/main/div/div[2]/div[2]/div[2]/div[2]/div[1]/button/span[1]')}
    get golfClubH5() { return $('h5')}
    get editEventH5() { return $('//div/div[1]/div/div[1]/h5')}

    public eventIdentifiers = {
        editEventHeaderName: 'Create event',
        savedEventMessage: 'The event details were successfully saved.',
        golfClubHeader: 'Golf Club',
        eventNameFieldErrMsg: 'A minimum of 3 characters is required.'
    };
}

export default new golfClub();