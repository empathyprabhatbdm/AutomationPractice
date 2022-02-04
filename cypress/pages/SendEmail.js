export class SendEmail {
    createNewEmail(userEmail, subject, mailContent) {
        cy.wait(500);
        cy.get('#zb__NEW_MENU_title').click();
        cy.get('#DWT42').type(userEmail);
        cy.get('#zv__COMPOSE-1_subject_control').type(subject);
        cy.wait(500);
        cy.get('#ZmHtmlEditor1_body_ifr').type(mailContent);
        cy.get('#zb__COMPOSE-1__SEND_title').click();
        cy.get('#z_toast_text > span').should('have.text', 'Message Sent');
        return this;
    }
    verifyMessageSent(email) {
        cy.get('#zti__main_Mail__5_textCell').click();
        cy.wait(200);
        cy.get('#zlif__CLV-main__-307__r3').click();
        cy.get('#zcs2 > span').contains(email);
        return this;
    }
}