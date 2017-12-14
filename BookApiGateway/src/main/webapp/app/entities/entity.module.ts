import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BookApiGatewayAuthorModule } from './author/author.module';
import { BookApiGatewayBookModule } from './book/book.module';
import { BookApiGatewayBookpictureModule } from './bookpicture/bookpicture.module';
import { BookApiGatewayGenreModule } from './genre/genre.module';
import { BookApiGatewayRatingModule } from './rating/rating.module';
import { BookApiGatewayUserpreferenceModule } from './userpreference/userpreference.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BookApiGatewayAuthorModule,
        BookApiGatewayBookModule,
        BookApiGatewayBookpictureModule,
        BookApiGatewayGenreModule,
        BookApiGatewayRatingModule,
        BookApiGatewayUserpreferenceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookApiGatewayEntityModule {}
