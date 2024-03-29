import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
    {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuardService]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
    {path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule'},
    {path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
