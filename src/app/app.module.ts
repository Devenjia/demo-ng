import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule , HashLocationStrategy,  LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRouteModule,Components } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouteModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
