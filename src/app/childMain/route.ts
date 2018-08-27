import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ChildMainComponent } from './childMain.component';
import { ChildOneComponent } from '../childOne/childOne.component';
import { ChildTwoComponent } from '../childTwo/childTwo.component';
import { ChildDialogComponent } from '../childDialog/childDialog.component';
import { ChildHComponent } from '../childH/childH';
const routes: Routes = [
	{ 
        path: '',  component: ChildMainComponent ,
        children: [
                    { path: 'c',component : ChildHComponent },
                ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class RoutingModule {}


export const Components = [
    ChildMainComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildDialogComponent,
    ChildHComponent
];