import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'my-app1';
  public iNumber = 0;
  public iFalag:number;
  public dialogVisible=false;
  showDialog(iFalag){
    this.dialogVisible=true;
    this.iFalag=iFalag;
  }
  setNumFn(param){
    this.dialogVisible=param.dialogVisible;
    this.iNumber=param.newNumber;
  }
}
