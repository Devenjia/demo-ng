import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailService,
    { provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
