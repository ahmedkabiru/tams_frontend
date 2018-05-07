import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TerminalService} from "./terminal.service";
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
  // rows: any[];
  // columns: any[];
  constructor(private authService:AuthService,private terminalService: TerminalService,private modalService: NgbModal, public router: Router) {

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
      console.log(res.terminals);
      this.terminals = res.terminals;
    });
  }

  updateTerminal(terminal : Terminal){
      console.log(terminal);
      
  }
    deleteTerminal(id) {
      this.terminalService.deleteTerminal(id).subscribe(res => {
            if(res.responsecode == "00"){
              alert("Deleted successfully");
              // this.router.navigate(["/terminal"]);
              window.location.reload(true);
            }
          });
    }
  

}
