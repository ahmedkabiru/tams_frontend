import { NgModule } from '@angular/core';
import {AuthService} from './auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {AuthHelperService} from './auth-helper.service';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
// import {EmployeeService} from '../employees/employee.service';
// import {ProductService} from '../products/product.service';
// import {CustomerService} from '../customers/customer.service';
// import {OrderService} from '../orders/order.service';

@NgModule({
  imports: [
   // SharedModule,
    // AppRoutingModule,
    CommonModule,
    NgbCollapseModule
  ],
  declarations: [
   // HomeComponent,
    // HeaderComponent
  ],
  exports: [
   // AppRoutingModule,
    // HeaderComponent
  ],
  providers: [
    AuthService,
    AuthHelperService,
    // EmployeeService,
    // ProductService,
    // OrderService,
    // CustomerService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ]
})
export class AuthModule { }
