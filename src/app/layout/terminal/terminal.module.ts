import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalComponent } from './terminal.component';
import { PageHeaderModule } from './../../shared';
import {TerminalService} from './terminal.service';
import { AddTerminalComponent } from './add-terminal/add-terminal.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule, TerminalRoutingModule, PageHeaderModule, NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    declarations: [TerminalComponent, AddTerminalComponent],
    providers: [
        TerminalService
    ]
})
export class TerminalModule {}
