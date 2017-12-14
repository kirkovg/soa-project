import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookApiGatewaySharedModule } from '../../shared';
import {
    UserpreferenceService,
    UserpreferencePopupService,
    UserpreferenceComponent,
    UserpreferenceDetailComponent,
    UserpreferenceDialogComponent,
    UserpreferencePopupComponent,
    UserpreferenceDeletePopupComponent,
    UserpreferenceDeleteDialogComponent,
    userpreferenceRoute,
    userpreferencePopupRoute,
    UserpreferenceResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...userpreferenceRoute,
    ...userpreferencePopupRoute,
];

@NgModule({
    imports: [
        BookApiGatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        UserpreferenceComponent,
        UserpreferenceDetailComponent,
        UserpreferenceDialogComponent,
        UserpreferenceDeleteDialogComponent,
        UserpreferencePopupComponent,
        UserpreferenceDeletePopupComponent,
    ],
    entryComponents: [
        UserpreferenceComponent,
        UserpreferenceDialogComponent,
        UserpreferencePopupComponent,
        UserpreferenceDeleteDialogComponent,
        UserpreferenceDeletePopupComponent,
    ],
    providers: [
        UserpreferenceService,
        UserpreferencePopupService,
        UserpreferenceResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookApiGatewayUserpreferenceModule {}
