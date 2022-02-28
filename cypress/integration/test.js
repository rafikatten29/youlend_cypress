describe("Standard user web automation", () => {
    beforeEach(() => {
        cy.visit('http://www.saucedemo.com')
        cy.get('input[name="user-name"]').type('standard_user').should('have.value', 'standard_user')
        cy.get('input[name="password"]').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('input[name="login-button"]').click()
      })
    it ('I add 1 iten to cart and check this in shopping cart', () => {
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('div[class="inventory_item_name"]').first().should('have.text', 'Sauce Labs Backpack')
        cy.get('div[class="inventory_item_price"]').first().should('have.text', '$29.99')
    })
    it ('I add 2 items to cart and check this in shopping cart', () => {
        cy.get('button[name="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('div[class="inventory_item_name"]').first().should('have.text', 'Sauce Labs Fleece Jacket')
        cy.get('div[class="inventory_item_price"]').first().should('have.text', '$49.99')
        cy.get('div[class="inventory_item_name"]').eq(1).should('have.text', 'Sauce Labs Backpack')
        cy.get('div[class="inventory_item_price"]').eq(1).should('have.text', '$29.99')
    })
    it ('Log out and attempt to login as locked_out_user', () => {
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('locked_out_user').should('have.value', 'locked_out_user')
        cy.get('input[name="password"]').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
}) 


