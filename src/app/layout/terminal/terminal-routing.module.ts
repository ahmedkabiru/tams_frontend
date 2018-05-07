import { NgModule } from '@angular/core';
import {  Routes, RouterModule, ExtraOptions } from '@angular/router';
import { TerminalComponent } from './terminal.component';
import { AddTerminalComponent} from './add-terminal/add-terminal.component';
const routes: Routes = [
    {
      path: '', component: TerminalComponent
    },
    
	    {
		 path: 'addterminal',
		 component: AddTerminalComponent
        }
    


    // {
    //     path: 'addterminal',
    //     component: AddTerminalComponent
    // }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TerminalRoutingModule { }
