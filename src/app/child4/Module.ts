import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

//add route api
import { RoutingModule ,Components} from './route';

@NgModule({
  declarations: [
    ...Components,
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  providers: [
  ],
})
export class Module { }
