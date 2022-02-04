import { Login } from "../../pages/Login";
import { Logout } from "../../pages/Logout";
const login = new Login();
const logout = new Logout();

describe('Login and Logout', () => {
    beforeEach('Navigate to email url', function() {
        login.navigate();
        cy.fixture('demo-data/data').then((credentials) => {
            this.credentials = credentials;
        })
    })
    it.skip('Login with invalid credentials', function() {
        login.login(this.credentials.wrongUsername, this.credentials.password);
        login.verifyInvalidEmailLogin(this.credentials.errorMessage);
        login.login(this.credentials.username, this.credentials.wrongPassword);
        // login.verifyInvalidPasswordLogin(this.credentials.errorMessage);

    })

    it('Basic login and logout', function() {
        login.login(this.credentials.username, this.credentials.password);
        cy.wait(1000);
        login.verifyUserLoggedIn(this.credentials.loggedInUsername);
        logout.logoutDropdown();
        // logout.verifyUserLoggedOut();
    })
})