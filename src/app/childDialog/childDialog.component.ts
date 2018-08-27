import { Component, ViewEncapsulation, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'childDialog',
  templateUrl: './childDialog.component.html',
  styleUrls: ['./childDialog.component.css'],
  inputs: ['dialogVisible:dialogVisible', 'iFalag:iFalag'],
  outputs: [
    'setNumFn',
  ]
})
export class ChildDialogComponent {
  public dialogVisible: boolean;
  public iFalag: number;
  public setNumFn = new EventEmitter<any>();
  public active = true;
  public iNumber = 0;
  public newNumber=0;
  close() {
    this.dialogVisible = false;
    this.setNumFn.emit({dialogVisible:this.dialogVisible,newNumber:this.newNumber});
    this.active = true;
    this.iNumber=0;
  }
  onChange() {
    if (this.iFalag === 2 && Math.sqrt(Number(this.iNumber)).toString().indexOf('.') < 0) {
      this.active = false;
      this.newNumber=Math.sqrt(Number(this.iNumber));
    } else if (this.iFalag === 3 && Math.cbrt(Number(this.iNumber)).toString().indexOf('.') < 0) {
      this.active = false;
      this.newNumber=Math.cbrt(Number(this.iNumber));
    }else{
      this.active = true;
      this.newNumber=0;
    }
  }
}
