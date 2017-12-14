import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    BookApiGatewaySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        BookApiGatewaySharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        BookApiGatewaySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class BookApiGatewaySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
