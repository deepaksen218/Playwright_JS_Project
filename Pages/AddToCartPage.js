import {test, expect} from '@playwright/test';
export class AddToCartPage{

    //LOCATORS
    constructor(page){
        this.page=page;
    
        this.product1=page.getByRole('link', {name:'Samsung galaxy s6'});                //---- click-- navigate to another page
        this.addToCartButton = page.getByRole('link',{name:'Add to cart'});     //---- Click-- Add to Cart page button
        this.phoneName= page.locator('h2.name');
  

    }

    //ACTIONS
    
    async selectProduct1(){
        await this.product1.click();
    }
    async addProductToCart(){
        await this.addToCartButton.click();
    }


    //ASSERTIONS
    async verifyTheRightPhoneSelected(){
        await expect(this.phoneName).toHaveText(`Samsung galaxy s6`);
    }

    async verifyTheProductIsVisible(){
        await expect(this.addToCartButton).toBeVisible();
    }

}