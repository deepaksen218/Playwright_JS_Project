import {test, expect} from '@playwright/test';
import data from '../Utils/TestData.json';
export class PurchasePage{

    //LOCATORS
    constructor(page){
        this.page=page;
    
        this.cartButton=page.locator('#cartur');
        this.placeOrderButton=page.getByRole('button', {name:'Place Order'});
        this.name=page.locator('#name');
        this.country=page.locator('#country');
        this.city=page.locator('#city');
        this.creditCard=page.locator('#card');
        this.month=page.locator('#month');
        this.year=page.locator('#year')
        this.purchaseButton=page.getByRole('button',{name:'Purchase'});
        this.purchaseSuccess=page.getByRole('heading',{name:'Thank you for your purchase!'});
        this.purchaseOKButton=page.getByRole('button',{name:'OK'})

        //--MONITORS
        this.monitor=page.getByRole('link',{name: 'Monitors'});
        this.selectMonitor=page.getByRole('link',{name: 'Apple monitor 24'});

    }


    //ACTIONS
     
    async clickCart(){
        await this.cartButton.click();
    }
    async clickPlaceOrder(){
        await this.placeOrderButton.click();
    }
    async enterName(){
        const dyName= `${data.name}${Date.now()}`;
        await this.name.fill(dyName);
    }
    async enterCountry(){
        await this.country.fill(data.country);
    }
    async enterCity(){
        await this.city.fill(data.city);
    }
    async enterCreditCard(){
        const dyCreditCard= `${Date.now()}`;
        await this.creditCard.fill(dyCreditCard);
        //await this.creditCard.fill(data.creditCard);
    }
    async enterMonth(){
        await this.month.fill(data.month);
    }
    async enterYear(){
        await this.year.fill(data.year);
    }
    async clickPurchaseButton(){
        await this.purchaseButton.click();
    }
    async clickPurchaseOKButton(){
        await this.purchaseOKButton.click();
    }

    async clickMonitor(){
        await this.monitor.click();
    }
    async selectMonitor1(){
        await this.selectMonitor.click();
    }

    //ASSERTIONS

    async verifyPurchaseSuccess(){
        await expect(this.purchaseSuccess).toHaveText(`Thank you for your purchase!`);
    }

    async verifyTheRightMonitorSelected(){
        await expect(this.selectMonitor).toHaveText(`Apple monitor 24`);
    }


}