import { expect } from "@playwright/test";
export class SignupPage{
    constructor(page){
        this.page=page;
        this.signupHomePageButton=page.locator('#signin2');
        this.usernamefield=page.locator('#sign-username');
        this.passwordfield=page.locator('#sign-password');
        //this.SignUpButton=page.locator("//button[@onclick='register()']");
        this.SignUpButton=page.getByRole('button',{name:'Sign up'});
        this.CloseButton = page.locator('#signInModal .btn-secondary');
        


        this.signupModel=page.locator('#signInModal');
    }

    async navigateToApplication(){
        await this.page.goto('https://demoblaze.com/');
    }

    async clickOnSignUpButtonFromHomePage() {
        await this.signupHomePageButton.click();
    }

    async applicationSignUp(username, password){
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.SignUpButton.click();
    }

    async SignUpCloseModule(username, password){
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.CloseButton.click();
    }

    async verifySignupModuleClosed(){
        await expect(this.signupModel).toBeHidden();
    }

    async verifyHomePageTextLogOut(){
        await expect(this.page).toHaveText('Log out');
    }

     async verifyHomePageTextLogIn(){
        await expect(this.page).toHaveText('Log in');
    }

}