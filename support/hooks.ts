import {After, Before, BeforeAll, HookScenarioResult, setDefaultTimeout} from 'cucumber';
import allureReporter from '@wdio/allure-reporter';
import {unlinkSync, writeFileSync} from 'fs';


Before(function() {
    browser.pause(500);
    clearSession();
    browser.url('/');
});

After(function(scenarioResult: HookScenarioResult) {
    saveScreenshots(scenarioResult);
    clearSession();
});

function saveScreenshots(scenarioResult: HookScenarioResult) {
    if (scenarioResult.result.status === 'failed') {
        const fileName =
            'artifacts/screenshots/' +
            scenarioResult.sourceLocation.uri.split(/features[\\/]/)[1].replace(/[\\/.]/g, '_') + '_' +
            scenarioResult.sourceLocation.line + '.png';
        const screenshot = browser.takeScreenshot();
        writeFileSync(fileName, screenshot, {encoding: 'base64'});
        allureReporter.addAttachment('screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
    }
}

function clearSession() {
    if (browser.getUrl().startsWith('data:')) {
        browser.url('/');
    }
    browser.execute('window.sessionStorage.clear();');
    browser.execute('window.localStorage.clear();');
    browser.deleteAllCookies();
}
