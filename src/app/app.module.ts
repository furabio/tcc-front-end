import 'hammerjs';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from 'app/app.component';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { CoreModule } from './core/core.module';

const appRoutes: Routes = [
    {
        path        : 'periods',
        loadChildren: './pages/period/period.module#PeriodModule'
    },
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path        : 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        CoreModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
