import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class ChildComponent implements OnInit {
  public username:any;
  public eid:any;
  constructor(public activeRouter: ActivatedRoute) { }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      this.username = params.username;
      this.eid = params.eid;
    })
  }
}
