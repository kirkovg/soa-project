import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApiGatewaySharedModule } from '../../shared';
import {
    BookpictureService,
    BookpicturePopupService,
    BookpictureComponent,
    BookpictureDetailComponent,
    BookpictureDialogComponent,
    BookpicturePopupComponent,
    BookpictureDeletePopupComponent,
    BookpictureDeleteDialogComponent,
    bookpictureRoute,
    bookpicturePopupRoute,
    BookpictureResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...bookpictureRoute,
    ...bookpicturePopupRoute,
];

@NgModule({
    imports: [
        ApiGatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BookpictureComponent,
        BookpictureDetailComponent,
        BookpictureDialogComponent,
        BookpictureDeleteDialogComponent,
        BookpicturePopupComponent,
        BookpictureDeletePopupComponent,
    ],
    entryComponents: [
        BookpictureComponent,
        BookpictureDialogComponent,
        BookpicturePopupComponent,
        BookpictureDeleteDialogComponent,
        BookpictureDeletePopupComponent,
    ],
    providers: [
        BookpictureService,
        BookpicturePopupService,
        BookpictureResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiGatewayBookpictureModule {}
