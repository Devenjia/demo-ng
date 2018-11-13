import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Input() message: string;
  @Output() update = new EventEmitter<{ text: string }>();
  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
  constructor() { }

  ngOnInit() {

  }

}
