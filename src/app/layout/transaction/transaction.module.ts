import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { PageHeaderModule } from './../../shared';
import {TransactionService} from './transaction.service';
@NgModule({
    imports: [CommonModule, TransactionRoutingModule, PageHeaderModule, NgxDatatableModule],
    declarations: [TransactionComponent],
    providers: [
        TransactionService
    ]
})
export class TransactionModule {}
