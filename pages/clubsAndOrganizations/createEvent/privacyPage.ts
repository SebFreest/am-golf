import { expect } from 'chai';

class Privacy {
    get socialPageDropDown() { return $('//*[@id="/socialPrivacy"]'); }
    get participantsPageDropDown() { return $('//*[@id="/participantsPrivacy"]'); }
    get leaderboardsPageDropDown() { return $('//*[@id="/leaderboardsPrivacy"]'); }
    get flightsPageDropDown() { return $('//*[@id="/flightsPrivacy"]'); }
    get scoreEditDropDown() { return $('//*[@id="/scoresPrivacy"]'); }
    get socialPageDropDownItems() { return $$('//*[@id="menu-/socialPrivacy"]/div/ul/li//label'); }
    get participantsPageDropDownItems() { return $$('//*[@id="menu-/participantsPrivacy"]/div/ul/li//label'); }
    get leaderboardsPageDropDownItems() { return $$('//*[@id="menu-/leaderboardsPrivacy"]/div/ul/li//label'); }
    get flightsPageDropDownItems() { return $$('//*[@id="menu-/flightsPrivacy"]/div/ul/li//label'); }
    get scoreEditDropDownItems() { return $$('//*[@id="menu-/scoresPrivacy"]/div/ul/li//label'); }

    public labelsOf = {
        socialPage: ['Public', 'Everybody can access this page', 'Private', 'Only participants can access this page', 'Restricted', 'Only Admins can access this page'],
        participantsPage: ['Public', 'Everybody can access this page', 'Private', 'Only participants can access this page', 'Restricted', 'Only Admins can access this page'],
        leaderboardsPage: ['Public', 'Everybody can access this page', 'Private', 'Only participants can access this page', 'Restricted', 'Only Admins can access this page'],
        flightsPage: ['Public', 'Everybody can access this page', 'Private', 'Only participants can access this page', 'Restricted', 'Only Admins can access this page'],
        scoresEdit: ['Admins', 'Only admins can introduce scores on scorecards.', 'People', 'Players can introduce scores to their flight\'s members.']
    }

    public openSocialPageDropDown() {
        this.socialPageDropDown.waitForClickable();
        return this.socialPageDropDown.click();
    }

    public openparticipantsPageDropDown() {
        this.participantsPageDropDown.waitForClickable();
        return this.participantsPageDropDown.click();
    }

    public openleaderboardsPageDropDown() {
        this.leaderboardsPageDropDown.waitForClickable();
        return this.leaderboardsPageDropDown.click();
    }

    public openflightsPageDropDown() {
        this.flightsPageDropDown.waitForClickable();
        return this.flightsPageDropDown.click();
    }

    public openscoreEditDropDown() {
        this.scoreEditDropDown.waitForClickable();
        return this.scoreEditDropDown.click();
    }

    public verifyValuesOfSocialPage() {
        browser.waitUntil(() => this.socialPageDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.socialPageDropDownItems.forEach(item => {
            this.labelsOf.socialPage.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.labelsOf.socialPage.length).to.equal(countItems);
    }

    public verifyValuesOfParticipantsPage() {
        browser.waitUntil(() => this.participantsPageDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.participantsPageDropDownItems.forEach(item => {
            this.labelsOf.participantsPage.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.labelsOf.participantsPage.length).to.equal(countItems);
    }

    public verifyValuesOfLeaderboardsPage() {
        browser.waitUntil(() => this.leaderboardsPageDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.leaderboardsPageDropDownItems.forEach(item => {
            this.labelsOf.leaderboardsPage.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.labelsOf.leaderboardsPage.length).to.equal(countItems);
    }

    public verifyValuesOfFlightsPage() {
        browser.waitUntil(() => this.flightsPageDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.flightsPageDropDownItems.forEach(item => {
            this.labelsOf.flightsPage.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.labelsOf.flightsPage.length).to.equal(countItems);
    }

    public verifyValuesOfScoresEdit() {
        browser.waitUntil(() => this.scoreEditDropDownItems[0].isDisplayed() == true, {timeout: 5000});
        let countItems = 0;
        this.scoreEditDropDownItems.forEach(item => {
            this.labelsOf.scoresEdit.forEach(label => {
                if (label === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.labelsOf.scoresEdit.length).to.equal(countItems);
    }
    

}

export default new Privacy();