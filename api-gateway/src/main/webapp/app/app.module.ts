import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { ApiGatewaySharedModule, UserRouteAccessService } from './shared';
import { ApiGatewayAppRoutingModule} from './app-routing.module';
import { ApiGatewayHomeModule } from './home/home.module';
import { ApiGatewayAdminModule } from './admin/admin.module';
import { ApiGatewayAccountModule } from './account/account.module';
import { ApiGatewayEntityModule } from './entities/entity.module';
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
        ApiGatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ApiGatewaySharedModule,
        ApiGatewayHomeModule,
        ApiGatewayAdminModule,
        ApiGatewayAccountModule,
        ApiGatewayEntityModule,
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
export class ApiGatewayAppModule {}
