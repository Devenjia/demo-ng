import { Component ,ViewEncapsulation ,OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'childOne',
  templateUrl: './childOne.component.html',
  styleUrls: ['./childOne.component.css'],
  inputs: ['iNumber:iChildNumber'],
  outputs: [
        'parentResetFn',
   ]
})

export class ChildOneComponent {
  public iNumber: any;
}
