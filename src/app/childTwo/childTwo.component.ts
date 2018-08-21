import { Component ,ViewEncapsulation ,OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'childTwo',
  templateUrl: './childTwo.component.html',
  styleUrls: ['./childTwo.component.css'],
  inputs: ['iNumber:iChildNumber'],
  outputs: [
        'parentResetFn',
   ]
})

export class ChildTwoComponent{
  public iNumber: any;
  // public iSquareNum=this.iNumber * this.iNumber;

}
