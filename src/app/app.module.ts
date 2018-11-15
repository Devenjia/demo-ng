import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjaxService } from "./common/service/ajax/ajax.service";
import { AppComponent } from './app.component';
import { CONFIG } from './common/service/config/config';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AjaxService,
    ...CONFIG,],
  bootstrap: [AppComponent]
})
export class AppModule { }
