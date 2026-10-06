import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage.js';
import data from '../Utils/TestData.json';

test('Validating Login with Valid Credentials', async ({page}) => {
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const loginPage= new LoginPage(page);

    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
   
    await loginPage.applicationLogIn(validusername, validpassword);
    await loginPage.verifyLogInHomePage(validusername);

});

test('Validating Login with Invalid Credentials', async ({page}) => {
    const invalidusername=data.invalidusername;
    const invalidpassword=data.invalidpassword;

    const loginPage= new LoginPage(page);

    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
   
    await loginPage.applicationLogIn(invalidusername, invalidpassword);
    await loginPage.verifyLoginButtonText();
});

test('Validating Login with Valid Username and Invalid Password ', async ({page}) => {
    const validusername=data.validusername;
    const invalidpassword=data.invalidpassword;

    const loginPage= new LoginPage(page);

    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
   
    await loginPage.applicationLogIn(validusername, invalidpassword);
    await loginPage.verifyLoginButtonText();
});

// invalid username and valid password__ missing

test('Validating Login with Invalid Username and Valid Password', async ({page}) => {
    const invalidusername=data.invalidusername;
    const validpassword=data.validpassword;

    const loginPage= new LoginPage(page);

    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
   
    await loginPage.applicationLogIn(invalidusername, validpassword );
    await loginPage.verifyLoginButtonText();
});

test('Validating Login with Valid Credentials and Logout', async ({page}) => {
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const loginPage= new LoginPage(page);

    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
   
    await loginPage.applicationLogIn(validusername, validpassword);
    await loginPage.verifyLogInHomePage(validusername);
    await loginPage.verifyLogoutText();
});