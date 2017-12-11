import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApigatewayBookModule } from './book/book.module';
import { ApigatewayAuthorModule } from './author/author.module';
import { ApigatewayGenreModule } from './genre/genre.module';
import { ApigatewayRatingModule } from './rating/rating.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ApigatewayBookModule,
        ApigatewayAuthorModule,
        ApigatewayGenreModule,
        ApigatewayRatingModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApigatewayEntityModule {}
