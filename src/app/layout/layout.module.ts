import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import {AuthModule} from "../auth/auth.module";
// import {AuthHelperService} from "../auth/auth-helper.service";
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
// import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
       // AuthModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        LayoutComponent, SidebarComponent, HeaderComponent
    ]
})
export class LayoutModule {}
