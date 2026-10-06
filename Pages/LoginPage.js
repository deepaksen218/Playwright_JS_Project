import { test, expect } from "@playwright/test";
export class LoginPage{
    
    //LOCATORS
    constructor(page){
        this.page=page;
        this.loginHomePageButton=page.locator('#login2');
        this.usernamefield=page.locator('#loginusername');
        this.passwordfield=page.locator('#loginpassword');
        
        this.LogInButton=page.getByRole('button',{name:'Log in'});
        this.CloseButton = page.locator('#logInModal .btn-secondary');

        this.LogInModel=page.locator('#logInModal');
        this.LogOutText=page.locator('#logout2')
        this.NameOfUser= page.locator('#nameofuser');
    }

    //ACTIONS
    async navigateToApplication(){
        await this.page.goto('https://demoblaze.com/');
    }

    async clickOnLogInButtonFromHomePage() {
        await this.loginHomePageButton.click();
    }

    async applicationLogIn(username, password){
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.LogInButton.click();
    }

    async LogInCloseModule(username, password){
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.CloseButton.click();
    }

    
    //ASSERTIONS
    async verifyLogInModuleClosed(){
        await expect(this.LogInModel).toBeHidden();
    }

    async verifyLogInHomePage(username){
        await expect(this.NameOfUser).toHaveText(`Welcome ${username}`);
    }

    async verifyLogoutText(){
        await expect(this.LogOutText).toBeVisible();
    }

    async verifyLoginButtonText(){
        await expect(this.loginHomePageButton).toHaveText('Log in');
    }


}