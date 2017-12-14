import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApiGatewayBookModule } from './book/book.module';
import { ApiGatewayAuthorModule } from './author/author.module';
import { ApiGatewayBookpictureModule } from './bookpicture/bookpicture.module';
import { ApiGatewayGenreModule } from './genre/genre.module';
import { ApiGatewayRatingModule } from './rating/rating.module';
import { ApiGatewayUserpreferenceModule } from './userpreference/userpreference.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ApiGatewayBookModule,
        ApiGatewayAuthorModule,
        ApiGatewayBookpictureModule,
        ApiGatewayGenreModule,
        ApiGatewayRatingModule,
        ApiGatewayUserpreferenceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiGatewayEntityModule {}
