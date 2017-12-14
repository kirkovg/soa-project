import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Bookpicture e2e test', () => {

    let navBarPage: NavBarPage;
    let bookpictureDialogPage: BookpictureDialogPage;
    let bookpictureComponentsPage: BookpictureComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Bookpictures', () => {
        navBarPage.goToEntity('bookpicture');
        bookpictureComponentsPage = new BookpictureComponentsPage();
        expect(bookpictureComponentsPage.getTitle()).toMatch(/Bookpictures/);

    });

    it('should load create Bookpicture dialog', () => {
        bookpictureComponentsPage.clickOnCreateButton();
        bookpictureDialogPage = new BookpictureDialogPage();
        expect(bookpictureDialogPage.getModalTitle()).toMatch(/Create or edit a Bookpicture/);
        bookpictureDialogPage.close();
    });

    it('should create and save Bookpictures', () => {
        bookpictureComponentsPage.clickOnCreateButton();
        bookpictureDialogPage.setPictureInput(absolutePath);
        bookpictureDialogPage.setBookIdInput('5');
        expect(bookpictureDialogPage.getBookIdInput()).toMatch('5');
        bookpictureDialogPage.save();
        expect(bookpictureDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class BookpictureComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-bookpicture div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class BookpictureDialogPage {
    modalTitle = element(by.css('h4#myBookpictureLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    pictureInput = element(by.css('input#file_picture'));
    bookIdInput = element(by.css('input#field_bookId'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setPictureInput = function (picture) {
        this.pictureInput.sendKeys(picture);
    }

    getPictureInput = function () {
        return this.pictureInput.getAttribute('value');
    }

    setBookIdInput = function (bookId) {
        this.bookIdInput.sendKeys(bookId);
    }

    getBookIdInput = function () {
        return this.bookIdInput.getAttribute('value');
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
