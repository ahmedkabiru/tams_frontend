import { Component, OnInit } from '@angular/core';
import {TransactionService} from './transaction.service';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  animations: [routerTransition()]
})
export class TransactionComponent implements OnInit {

  transactions: any;
  constructor(private transactionService: TransactionService) {
   }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction() {
    this.transactionService.getAllTransactions().subscribe(res => {
      console.log(res.transactions);
      this.transactions = res.transactions;
    });
}

}
