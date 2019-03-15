import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TerminalService} from './terminal.service';
import { AuthService } from '../../auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Terminal } from './terminal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  animations: [routerTransition()]
})
export class TerminalComponent implements OnInit {
  terminals: any;
 // content :any;
  // rows: any[];
  // columns: any[];
  closeResult = '';
  terminal = new Terminal() ;

  constructor(private authService: AuthService, private terminalService: TerminalService, private modalService: NgbModal, public router: Router) {

   }

  ngOnInit() {
    this.getTerminals();
    // this.columns = [
    //   // {prop: "id", name: "ID", width: 10},
    //   {prop: "terminalid", name: "Terminal ID"},
    //   {prop: "merchantcategorycode", name: "Merchant Code"},
    //   {prop: "merchantid", name: "Merchant ID"},
    //   {prop: "namelocationaddress", name: "Location"},
    //   {prop: "currencycode", name: "Currency Code"},
    //   {prop: "kek", name: "Kek", width:300},
    //   {prop: "kekcheckvalue", name: "Checkvalue",width: 400},
    // //  {prop: "notes", name: "Notes", width: 400}
    // ];
  }

  getTerminals() {
    this.terminalService.getAllTerminals().subscribe(res => {
      this.terminals = res.terminals;
    });
  }

  updateTerminal(content, terminal: Terminal) {
      console.log(terminal);
      this.terminal = terminal;
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}
    deleteTerminal(id) {
      if (window.confirm('Are sure you want to delete this item ?')) {
      this.terminalService.deleteTerminal(id).subscribe(res => {
            if (res.responsecode === '00') {
              alert('Deleted successfully');
              // this.router.navigate(["/terminal"]);
              window.location.reload(true);
            }
          });
        }
    }


}
