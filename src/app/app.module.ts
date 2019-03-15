import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuardService} from './auth/auth-guard.service';
// import {AuthService} from './auth/auth.service';
// import {HTTP_INTERCEPTORS} from '@angular/common/http';
// import {AuthInterceptor} from './auth/auth.interceptor';
// import {AuthHelperService} from './auth/auth-helper.service';
// import {AuthHelperService} from './auth/auth-helper.service';
import {AuthModule} from './auth/auth.module';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxDatatableModule,
        // AuthHelperService,
        AuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuardService,
        // AuthService,
        // AuthHelperService,
        // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
