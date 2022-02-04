export class Login {
    navigate() {
        cy.visit('http://mail.tekkon.com.np/');
    }
    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#remember').click();
        cy.get('.ZLoginButton').click();
        return this;
    }
    verifyUserLoggedIn(loggedInUsername) {
        cy.get('#skin_container_username').should('include.text', loggedInUsername);
        return this;
    }
    verifyInvalidEmailLogin(errorMessage) {
        cy.get('#ZLoginErrorPanel > table > tbody > tr > td:nth-child(2)').should('have.text', errorMessage);
        return this;
    }
    verifyInvalidPasswordLogin(errorMessage) {
        cy.get('#ZLoginErrorPanel > table > tbody > tr > td:nth-child(2)').should('have.text', errorMessage);
        return this;
    }
}