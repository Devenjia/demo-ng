import { Component } from '@angular/core';

@Component({
  // selector: 'childMain',
  templateUrl: './childMain.component.html',
  styleUrls: ['./childMain.component.css'],
})

export class ChildMainComponent {
  public title = 'my-app1';
  public iNumber = 0;
  public iFalag: number;
  public dialogVisible = false;

  showDialog(iFalag) {
    this.dialogVisible = true;
    this.iFalag = iFalag;
  }
  setNumFn(param) {
    this.dialogVisible = param.dialogVisible;
    this.iNumber = param.newNumber;
  }

}
