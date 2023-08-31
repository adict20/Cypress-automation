describe('Facebook post creation', () => {

    let usernameInput = '#email'
    let passwordInput = '#pass'
    let loginBtn = 'button[data-testid="royal_login_button"]'
    let userName = 'adityakumar.block1996@gmail.com'
    let password = 'Test@1234'
    let menuOpt = '[aria-label = "Menu"]'

    it('Verify user is able to create a post', () => {
        cy.visit("https://www.facebook.com/")
        cy.get('a[href = "https://www.facebook.com/"]').click()
        cy.get(usernameInput).type(userName)
        cy.get(passwordInput).type(password)
        cy.get(loginBtn).click()
        cy.get(menuOpt).click()
    })
})