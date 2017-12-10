import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApigatewaySharedModule } from '../../shared';
import {
    GenreService,
    GenrePopupService,
    GenreComponent,
    GenreDetailComponent,
    GenreDialogComponent,
    GenrePopupComponent,
    GenreDeletePopupComponent,
    GenreDeleteDialogComponent,
    genreRoute,
    genrePopupRoute,
    GenreResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...genreRoute,
    ...genrePopupRoute,
];

@NgModule({
    imports: [
        ApigatewaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        GenreComponent,
        GenreDetailComponent,
        GenreDialogComponent,
        GenreDeleteDialogComponent,
        GenrePopupComponent,
        GenreDeletePopupComponent,
    ],
    entryComponents: [
        GenreComponent,
        GenreDialogComponent,
        GenrePopupComponent,
        GenreDeleteDialogComponent,
        GenreDeletePopupComponent,
    ],
    providers: [
        GenreService,
        GenrePopupService,
        GenreResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApigatewayGenreModule {}
