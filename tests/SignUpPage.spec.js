import {test, expect} from '@playwright/test';
import {SignupPage} from '../Pages/SignupPage.js';
import data from '../Utils/TestData.json';

test('Verifying SignUp with New User', async ({page}) => {
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const signUpPage= new SignupPage(page);

    await signUpPage.navigateToApplication();
    await signUpPage.clickOnSignUpButtonFromHomePage();
   
    await signUpPage.applicationSignUp(validusername, validpassword);
    //await signUpPage.verifyHomePageTextLogOut();
});

test ('Verifying Close button Functionality in SignUp module', async ({page})=>{
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const signUpPage= new SignupPage(page);

    await signUpPage.navigateToApplication();
    await signUpPage.clickOnSignUpButtonFromHomePage();
   
    await signUpPage.SignUpCloseModule(validusername, validpassword);
    await signUpPage.verifySignupModuleClosed;
    await signUpPage.verifyHomePageTextLogIn;


})

// check with LOGOUT or WELCOME: assertion