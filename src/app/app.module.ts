import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }     from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildTwoComponent } from './childTwo/childTwo.component';
import { ChildDialogComponent } from './childDialog/childDialog.component';

 

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildTwoComponent,
    ChildDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
