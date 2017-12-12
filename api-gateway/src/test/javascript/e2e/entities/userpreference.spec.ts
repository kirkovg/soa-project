import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Userpreference e2e test', () => {

    let navBarPage: NavBarPage;
    let userpreferenceDialogPage: UserpreferenceDialogPage;
    let userpreferenceComponentsPage: UserpreferenceComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Userpreferences', () => {
        navBarPage.goToEntity('userpreference');
        userpreferenceComponentsPage = new UserpreferenceComponentsPage();
        expect(userpreferenceComponentsPage.getTitle()).toMatch(/Userpreferences/);

    });

    it('should load create Userpreference dialog', () => {
        userpreferenceComponentsPage.clickOnCreateButton();
        userpreferenceDialogPage = new UserpreferenceDialogPage();
        expect(userpreferenceDialogPage.getModalTitle()).toMatch(/Create or edit a Userpreference/);
        userpreferenceDialogPage.close();
    });

    it('should create and save Userpreferences', () => {
        userpreferenceComponentsPage.clickOnCreateButton();
        userpreferenceDialogPage.setGenreInput('genre');
        expect(userpreferenceDialogPage.getGenreInput()).toMatch('genre');
        userpreferenceDialogPage.setScoreInput('5');
        expect(userpreferenceDialogPage.getScoreInput()).toMatch('5');
        userpreferenceDialogPage.setUserIdInput('5');
        expect(userpreferenceDialogPage.getUserIdInput()).toMatch('5');
        userpreferenceDialogPage.save();
        expect(userpreferenceDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class UserpreferenceComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-userpreference div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class UserpreferenceDialogPage {
    modalTitle = element(by.css('h4#myUserpreferenceLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    genreInput = element(by.css('input#field_genre'));
    scoreInput = element(by.css('input#field_score'));
    userIdInput = element(by.css('input#field_userId'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setGenreInput = function (genre) {
        this.genreInput.sendKeys(genre);
    }

    getGenreInput = function () {
        return this.genreInput.getAttribute('value');
    }

    setScoreInput = function (score) {
        this.scoreInput.sendKeys(score);
    }

    getScoreInput = function () {
        return this.scoreInput.getAttribute('value');
    }

    setUserIdInput = function (userId) {
        this.userIdInput.sendKeys(userId);
    }

    getUserIdInput = function () {
        return this.userIdInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
