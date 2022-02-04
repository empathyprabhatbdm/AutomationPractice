import { Login } from "../../pages/Login";
import { Logout } from "../../pages/Logout";
import { SendEmail } from "../../pages/SendEmail";

const sendEmail = new SendEmail();
const login = new Login();
const logout = new Logout();

describe('Send an email to a user', () => {
    beforeEach('Load the login page', function() {
        login.navigate();
        cy.fixture('demo-data/data').then((credentials) => {
            this.credentials = credentials;
        })
    })

    it.skip('Basic login and test', function() {
        login.login(this.credentials.username, this.credentials.password);
        cy.wait(200);
        login.verifyUserLoggedIn(this.credentials.loggedInUsername);
        cy.wait(200);
        sendEmail.createNewEmail(this.credentials.sendTo, this.credentials.subject, this.credentials.emailContent);
        cy.wait(200);
        sendEmail.verifyMessageSent(this.credentials.sendTo);
        cy.wait(200);
        cy.wait(500);
        logout.logoutDropdown();
        logout.verifyUserLoggedOut();
    })
})