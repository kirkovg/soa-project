import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { BookApiGatewaySharedModule, UserRouteAccessService } from './shared';
import { BookApiGatewayAppRoutingModule} from './app-routing.module';
import { BookApiGatewayHomeModule } from './home/home.module';
import { BookApiGatewayAdminModule } from './admin/admin.module';
import { BookApiGatewayAccountModule } from './account/account.module';
import { BookApiGatewayEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BookApiGatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BookApiGatewaySharedModule,
        BookApiGatewayHomeModule,
        BookApiGatewayAdminModule,
        BookApiGatewayAccountModule,
        BookApiGatewayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BookApiGatewayAppModule {}
