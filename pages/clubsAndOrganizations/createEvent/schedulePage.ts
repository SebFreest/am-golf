import { expect } from 'chai';

class Schedule {

    get noSchedulMessage() { return $('//h6[text()="Schedule"]/../h5'); }
    get startDateInput() { return $('//*[@id="/startDate"]'); }
    get endDateInput() { return $('//*[@id="/endDate"]'); }
    get calendarLefArrow() { return $('//div[@class="MuiPickersCalendarHeader-switchHeader"]/button[1]'); }
    get calendarRightArrow() { return $('//div[@class="MuiPickersCalendarHeader-switchHeader"]/button[2]'); }
    get datePickerCloseBtn() { return $('//div[2]/button/span[text()="Cancel"]'); }
    get addScheduleItemBtn() { return $('//button//span[text()="Add schedule item"]'); }
    get nameInput() { return $('//*[@id="/name"]'); }
    get descriptionInput() { return $('//*[@id="/description"]'); }
    get addScheduleItemModalBtn() { return $('//button//span[text()="Add"]'); }
    get saveScheduleItemModalBtn() { return $('//button[2]//span[text()="Save"]'); }
    get addScheduleItemDialog() { return $('//div[@role="dialog"]//h2/span'); }
    get addedScheduleItem() { return $$('//h6[text()="Schedule"]/..//label'); }
    get addedScheduleItemByName() { return (value: string) => $(`//h6[text()="Schedule"]/..//label[text()=\'${value}\']`); }
    get deleteBtnOfAddedScheduleItem() { return (value: string) => $(`//h6[text()="Schedule"]/..//label[text()=\'${value}\']/../../../button`); }

    public expectedScheduleItem = {
        values: ['08:00', 'My Schedule Item', 'This is a bot who adds schedule item'],
        editedValues: ['08:00', 'My Schedule ItemEdited', 'This is a bot who adds schedule itemEdited']
    }

    public isNoScheduleMessageVisible() {
        this.noSchedulMessage.waitForDisplayed();
        return this.noSchedulMessage.isDisplayed();
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

    public selectAddScheduleItemBtn() {
        this.addScheduleItemBtn.waitForClickable();
        return this.addScheduleItemBtn.click();
    }

    public saveScheduleItemFromTable(table: any) {
        for (const row of table.rows()) {
            const label = row[0];
            const value: string = row[1];
            this.fillInScheduleItem(label, value);
        }
    }

    public fillInScheduleItem(label: string, value: string) {
        switch (label) {
            case 'Name':
                browser.pause(500);
                this.nameInput.waitForDisplayed();
                this.nameInput.setValue(value);
                break;
            case 'Description':
                this.descriptionInput.waitForDisplayed();
                this.descriptionInput.setValue(value);
                break;
            default:
                throw new Error(`Field ${label} not defined!`);
        }
    }

    public verifyAddedScheduleItem() {
        browser.waitUntil(() => this.addScheduleItemDialog.isDisplayed() == false);
        let countItems = 0;
        this.addedScheduleItem.forEach(item => {
            this.expectedScheduleItem.values.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedScheduleItem.values.length).to.equal(countItems);
    }

    public openAddedScheduleItem(value: string) {
        return this.addedScheduleItemByName(value).click();
    }

    public verifEditedScheduleItem() {
        browser.waitUntil(() => this.addScheduleItemDialog.isDisplayed() == false);
        browser.pause(1000);
        let countItems = 0;
        this.addedScheduleItem.forEach(item => {
            this.expectedScheduleItem.editedValues.forEach(value => {
                if (value === item.getText()) {
                    countItems++;
                }
            })
        })
        expect(this.expectedScheduleItem.editedValues.length).to.equal(countItems);
    }

    public deleteScheduleItem(value: string) {
        this.deleteBtnOfAddedScheduleItem(value).waitForClickable();
        return this.deleteBtnOfAddedScheduleItem(value).click();
    }
}

export default new Schedule();