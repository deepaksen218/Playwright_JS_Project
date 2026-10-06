// Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup
import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage.js';
import { AddToCartPage } from '../Pages/AddToCartPage.js';
import data from '../Utils/TestData.json';

// ADD to cart in seperate
test('Validating user is succcessfull able to add product to the Cart', async ({page}) => {
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const loginPage= new LoginPage(page);
    const addToCartPage=new AddToCartPage(page)
    
    //LOGIN
    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
    await loginPage.applicationLogIn(validusername, validpassword);
    await loginPage.verifyLogInHomePage(validusername);

    // SELECT PRODUCT
    await addToCartPage.selectProduct1();

    //VERIFY CORRECT PRODUCT
    await addToCartPage.verifyTheRightPhoneSelected();

    // VERIFY ADD TO CART BUTTON
    await addToCartPage.verifyTheProductIsVisible();

    // POP Up Handeling-- can use 'page.on' or 'page.once'
    page.on('dialog', async dialog => {
       expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    }); // -- ADD to ADDTOCARTPAGE.js, since it is an ACTION

    //ADD PRODUCT TO CART
    await addToCartPage.addProductToCart();
    
    //await loginPage.verifyLogoutText();
});