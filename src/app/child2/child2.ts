import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './child2.html',
  styleUrls: ['./child2.css']
})
export class Child2Component implements OnInit{
  public username:any;
  public eid:any;
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.params.subscribe((params) => {this.username = params.username; this.eid=params.eid});
  }
}
