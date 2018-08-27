import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { Child4Component } from './child4';
import { ChildFComponent } from '../childF/childF';


const routes: Routes = [
	{ 
        path: '',  component: Child4Component ,
        children: [
                    { path: 'd',component : ChildFComponent },
                ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class RoutingModule {}


export const Components = [
    Child4Component,
    ChildFComponent
];