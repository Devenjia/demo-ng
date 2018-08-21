import { Component ,ViewEncapsulation ,OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['iNumber:iChildNumber'],
  outputs: [
        'parentResetFn',
   ]
})

export class ChildComponent {
  public iNumber: any;
  // public iSquareNum=this.iNumber * this.iNumber;
  ngOnInit() {
    // this.iSquareNum=this.iNumber * this.iNumber;
    // console.log('this.number',this.iSquareNum);
  }
}
