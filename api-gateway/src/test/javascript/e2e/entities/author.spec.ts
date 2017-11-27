import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Author e2e test', () => {

    let navBarPage: NavBarPage;
    let authorDialogPage: AuthorDialogPage;
    let authorComponentsPage: AuthorComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Authors', () => {
        navBarPage.goToEntity('author');
        authorComponentsPage = new AuthorComponentsPage();
        expect(authorComponentsPage.getTitle()).toMatch(/Authors/);

    });

    it('should load create Author dialog', () => {
        authorComponentsPage.clickOnCreateButton();
        authorDialogPage = new AuthorDialogPage();
        expect(authorDialogPage.getModalTitle()).toMatch(/Create or edit a Author/);
        authorDialogPage.close();
    });

    it('should create and save Authors', () => {
        authorComponentsPage.clickOnCreateButton();
        authorDialogPage.setNameInput('name');
        expect(authorDialogPage.getNameInput()).toMatch('name');
        authorDialogPage.setBornInput('5');
        expect(authorDialogPage.getBornInput()).toMatch('5');
        authorDialogPage.setWebsiteInput('website');
        expect(authorDialogPage.getWebsiteInput()).toMatch('website');
        authorDialogPage.bookSelectLastOption();
        authorDialogPage.save();
        expect(authorDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class AuthorComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-author div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class AuthorDialogPage {
    modalTitle = element(by.css('h4#myAuthorLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    bornInput = element(by.css('input#field_born'));
    websiteInput = element(by.css('input#field_website'));
    bookSelect = element(by.css('select#field_book'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setNameInput = function (name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function () {
        return this.nameInput.getAttribute('value');
    }

    setBornInput = function (born) {
        this.bornInput.sendKeys(born);
    }

    getBornInput = function () {
        return this.bornInput.getAttribute('value');
    }

    setWebsiteInput = function (website) {
        this.websiteInput.sendKeys(website);
    }

    getWebsiteInput = function () {
        return this.websiteInput.getAttribute('value');
    }

    bookSelectLastOption = function () {
        this.bookSelect.all(by.tagName('option')).last().click();
    }

    bookSelectOption = function (option) {
        this.bookSelect.sendKeys(option);
    }

    getBookSelect = function () {
        return this.bookSelect;
    }

    getBookSelectedOption = function () {
        return this.bookSelect.element(by.css('option:checked')).getText();
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
