describe('LinkedIn post creation', () => {

    let usernameInput = '#session_key'
    let passwordInput = '#session_password'
    let loginBtn = '[data-id = sign-in-form__submit-btn]'
    let userName = 'aditya.test201996@gmail.com'
    let password = 'Test@1234'
    let menuOpt = '[aria-label = "Menu"]'
    let postBtn = '#ember46'
    let postDesc = '[class = "ql-editor ql-blank"]'
    let publishPost = '[class = "share-actions__primary-action artdeco-button artdeco-button--2 artdeco-button--primary ember-view"]'
    let postSuccessMsg = '[class = "artdeco-toast-item artdeco-toast-item--visible ember-view"]'
    let text = "Starting a new position "
    let postLink = '[class = "artdeco-toast-item__cta"]'

    it('Verify user is able to create a post', () => {
        cy.visit("https://www.linkedin.com")
        cy.get(usernameInput).type(userName)
        cy.get(passwordInput).type(password)
        cy.get(loginBtn).click()
        cy.get(postBtn).click()
        cy.get(postDesc).type(text)
        cy.get(publishPost).click()
        cy.get(postSuccessMsg).should('be.visible')
        cy.get(postLink).click()
    })
})