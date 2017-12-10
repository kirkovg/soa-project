import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Genre e2e test', () => {

    let navBarPage: NavBarPage;
    let genreDialogPage: GenreDialogPage;
    let genreComponentsPage: GenreComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Genres', () => {
        navBarPage.goToEntity('genre');
        genreComponentsPage = new GenreComponentsPage();
        expect(genreComponentsPage.getTitle()).toMatch(/Genres/);

    });

    it('should load create Genre dialog', () => {
        genreComponentsPage.clickOnCreateButton();
        genreDialogPage = new GenreDialogPage();
        expect(genreDialogPage.getModalTitle()).toMatch(/Create or edit a Genre/);
        genreDialogPage.close();
    });

    it('should create and save Genres', () => {
        genreComponentsPage.clickOnCreateButton();
        genreDialogPage.setNameInput('name');
        expect(genreDialogPage.getNameInput()).toMatch('name');
        genreDialogPage.save();
        expect(genreDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class GenreComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-genre div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class GenreDialogPage {
    modalTitle = element(by.css('h4#myGenreLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setNameInput = function (name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function () {
        return this.nameInput.getAttribute('value');
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
