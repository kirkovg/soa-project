import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApiGatewaySharedModule } from '../../shared';
import {
    AuthorService,
    AuthorPopupService,
    AuthorComponent,
    AuthorDetailComponent,
    AuthorDialogComponent,
    AuthorPopupComponent,
    AuthorDeletePopupComponent,
    AuthorDeleteDialogComponent,
    authorRoute,
    authorPopupRoute,
    AuthorResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...authorRoute,
    ...authorPopupRoute,
];

@NgModule({
    imports: [
        ApiGatewaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AuthorComponent,
        AuthorDetailComponent,
        AuthorDialogComponent,
        AuthorDeleteDialogComponent,
        AuthorPopupComponent,
        AuthorDeletePopupComponent,
    ],
    entryComponents: [
        AuthorComponent,
        AuthorDialogComponent,
        AuthorPopupComponent,
        AuthorDeleteDialogComponent,
        AuthorDeletePopupComponent,
    ],
    providers: [
        AuthorService,
        AuthorPopupService,
        AuthorResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiGatewayAuthorModule {}
