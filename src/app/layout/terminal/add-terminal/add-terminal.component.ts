import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators, FormGroup,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { TerminalService} from "../terminal.service";
import { Terminal } from '../terminal';
@Component({
  selector: 'app-add-terminal',
  templateUrl: './add-terminal.component.html',
  styleUrls: ['./add-terminal.component.scss'],
  animations: [routerTransition()]
})
export class AddTerminalComponent implements OnInit {
  
  angForm: FormGroup;
  terminal = new Terminal;
  errormessage : string ="";
  
  constructor(private fb: FormBuilder,private terminalService:TerminalService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this.terminal = new Terminal();
  }
   
  createForm(){
    this.angForm = this.fb.group({
      terminalid: ['', Validators.required ],
      merchantid: ['', Validators.required ],
      merchantcategorycode:['',Validators.required ],
      namelocationaddress:['',Validators.required],
      kek:['',Validators.required],
      kekcheckvalue:['',Validators.required],
      serialnumber:['',Validators.required],
      node:['',Validators.required]
   });
  }

  addTerminal() {
    console.log(this.terminal);
    this.terminalService.addTerminal(this.terminal).subscribe(
      response => {
        console.log(response);
        if(response.responsecode != "00"){
          this.errormessage ="Invalid format";
        }else{
          alert("Added successfully");
          this.router.navigate(["/terminal"]);
          window.location.reload(true);
        }
      });
  }


}
