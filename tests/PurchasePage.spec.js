// Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup
import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage.js';
import { AddToCartPage } from '../Pages/AddToCartPage.js';
import { PurchasePage } from '../Pages/PurchasePage.js';
import data from '../Utils/TestData.json';


test('Validating whether user is able to successfully purchase a Phone', async ({page}) => {
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const loginPage= new LoginPage(page);
    const addToCartPage=new AddToCartPage(page);
    const purPage=new PurchasePage(page);
    
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

    // POP Up Handeling
    page.once('dialog', async dialog => {
       expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    });

    //ADD PRODUCT TO CART
    await addToCartPage.addProductToCart();
    
    // NAVIGATE TO CART
    await purPage.clickCart(); 

    //PLACE ORDER
    await purPage.clickPlaceOrder();

    //ADD DETAILS
    await purPage.enterName();
    await purPage.enterCountry();
    await purPage.enterCity();
    await purPage.enterCreditCard();
    await purPage.enterMonth();
    await purPage.enterYear();

    //PURCHASE
    await purPage.clickPurchaseButton();

    //VERIFY THE PURCHASE IS COMPLETE
    await purPage.verifyPurchaseSuccess();

    //CLICK OK ON SUCCESS POPUP
    await purPage.clickPurchaseOKButton();

    //await loginPage.verifyLogoutText();
});

test('Validating whether user is able to successfully purchase a Monitor', async ({page}) => {
    const validusername=data.validusername;
    const validpassword=data.validpassword;

    const loginPage= new LoginPage(page);
    const addToCartPage=new AddToCartPage(page);
    const purPage=new PurchasePage(page)
    
    //LOGIN
    await loginPage.navigateToApplication();
    await loginPage.clickOnLogInButtonFromHomePage();
    await loginPage.applicationLogIn(validusername, validpassword);
    await loginPage.verifyLogInHomePage(validusername);

    // SELECT MONITOR OPTION
    await purPage.clickMonitor();

    //VERIFY CORRECT PRODUCT
    await purPage.verifyTheRightMonitorSelected();

    // SELECT THE MONITOR
    await purPage.selectMonitor1();

    // VERIFY ADD TO CART BUTTON
    await addToCartPage.verifyTheProductIsVisible();

    // POP Up Handeling
    page.once('dialog', async dialog => {
       expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    });

    //ADD PRODUCT TO CART
    await addToCartPage.addProductToCart();
    
    // NAVIGATE TO CART
    await purPage.clickCart(); 

    //PLACE ORDER
    await purPage.clickPlaceOrder();

    //ADD DETAILS
    await purPage.enterName();
    await purPage.enterCountry();
    await purPage.enterCity();
    await purPage.enterCreditCard();
    await purPage.enterMonth();
    await purPage.enterYear();

    //PURCHASE
    await purPage.clickPurchaseButton();

    //VERIFY THE PURCHAS IS COMPLETE
    await purPage.verifyPurchaseSuccess();

    //CLICK OK ON SUCCESS POPUP
    await purPage.clickPurchaseOKButton();

    //CLICK ON LOGOUT
    //await loginPage.verifyLogoutText();
});
