
class LoginPage {
    get usernameInput() { return $('[data-test-id=username] > div > input') }
    get passwordInput() { return $('[data-test-id=password] > div > input') }
    get submitBtn() { return $('[data-test-id=login] > span') }
    get loginTabBtn() { return $('header > div > a:nth-child(1)') }
    get loginError() { return $('[data-test-id=error] > span > span'); }
    get usernameErrorMessage() { return $('[data-test-id=username] :nth-child(3) > i')}
    get forgotPasswordLink() { return $('[data-test-id=forgot]')}
    get rstPasswordTitle() { return $('.modal-title')}
    get rstPasswordBtn() { return $('[data-test-id=change]')}
    get registerBtn() { return $('[data-test-id=register]')}
    get registerPage() { return $('h1')}
    get welcomeHeaderh1() { return $('main > div > div > h1')}
    get welcomeHeaderh2() { return $('main > div > div > h2')}

    public messages = {
        invalidData: 'Your email address or password are incorrect. Please try again.',
        usernameErrorMessage: 'This field is mandatory',
        resetPasswordModalTitle: 'Forgot password',
        registerPageTitle: 'Register',
        welcomeH1message: 'Hi, Dev',
        welcomeH2message: 'What would you like to do today?'
    };

    public selectLoginTab() {
        this.loginTabBtn.click();
    }

    public setUsername(username: string) {
        this.usernameInput.waitForDisplayed();
        this.usernameInput.setValue(username);
    }

    public setPassword(password: string) {
        this.passwordInput.setValue(password);
    }
}

export default new LoginPage()