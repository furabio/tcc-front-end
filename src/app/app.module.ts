import 'hammerjs';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from 'app/app.component';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { ToastrModule } from 'ngx-toastr';

import { CoreModule } from './core/core.module';
import { AuthGuard } from './guards/auth.guard';

registerLocaleData(localePt);


const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: './main/pages/authentication/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'periods',
        loadChildren: './pages/period/period.module#PeriodModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        loadChildren: './pages/user/user.module#UserModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'classrooms',
        loadChildren: './pages/classroom/classroom.module#ClassroomModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'classroom',
        loadChildren: './main/apps/apps.module#AppsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path: 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path: 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path: 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path: '**',
        redirectTo: '/home',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        BrowserAnimationsModule, 
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }) 
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [

    ]
})
export class AppModule {
}
