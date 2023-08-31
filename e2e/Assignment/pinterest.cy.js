describe('Pinterest post creation', () => {

    let url = 'https://in.pinterest.com/'
    let login = '[class = "tBJ dyH iFc sAJ xnr tg7 H2s"]'
    let usernameInput = '#email'
    let passwordInput = '#password'
    let loginBtn = '[class = "red SignupButton active"]'
    let userName = 'aditya.test201996@gmail.com'
    let password = 'Test@1234'
    let accountOptions = '[aria-label = "Accounts and more options"]'
    let logoutOption = '[data-test-id = "header-menu-options-logout"]'
    it('Verify user is able to create a post', () => {
        cy.visit(url)
        cy.get(login).click()

        cy.get(usernameInput).type(userName)
        cy.get(passwordInput).type(password)
        cy.get(loginBtn).click()
        cy.get('span:contains("Home")').should('be.visible')
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

          cy.get(accountOptions).click()
          cy.get(logoutOption).click()
    })
})