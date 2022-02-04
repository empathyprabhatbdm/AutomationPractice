export class Logout{
    logoutDropdown(){
        cy.get('#DWT29_dropdown').click();
        cy.get('#logOff_title').click();
        return this;
    }

    verifyUserLoggedOut(){
        cy.get('.ZLoginButton').should('be.visible');
        return this;
    }
}
