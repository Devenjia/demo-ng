import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './child4.html',
  styleUrls: ['./child4.css']
})
export class Child4Component implements OnInit {
  public title = 'my-app1';
  public leftPicPath = '../assets/left.png';
  public RightPicPath = '../assets/right.png';
  public iCurrentSelIndex = 0;
  public collection = [
    {
      name: 'Yangyi',
      active: true,
      path: '../assets/1'
    },
    {
      name: 'Yonggeng',
      active: false,
      path: '../assets/2'
    },
    {
      name: 'Peter',
      active: false,
      path: '../assets/3'
    },
    {
      name: 'Liuao',
      active: false,
      path: '../assets/4'
    }
  ];
  public username: any;
  public eid: any;
  constructor(private route: ActivatedRoute) { }
  showSelectPic(sIndex) {
    for (var i = 0; i < this.collection.length; i++) {
      this.collection[i].active = false;
    }
    this.collection[sIndex].active = true;
    this.iCurrentSelIndex = sIndex;
  }
  _setSelectIndex(iNewIndex) {
    for (var i = 0; i < this.collection.length; i++) {
      this.collection[i].active = false;
    }
    if (this.iCurrentSelIndex === this.collection.length - 1 && iNewIndex > this.iCurrentSelIndex) {
      this.iCurrentSelIndex = 0;
    } else if (this.iCurrentSelIndex === 0 && iNewIndex < this.iCurrentSelIndex) {
      this.iCurrentSelIndex = this.collection.length - 1;
    } else {
      this.iCurrentSelIndex = iNewIndex;
    }
    this.collection[this.iCurrentSelIndex].active = true;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => { this.username = params.username; this.eid = params.eid });
  }
}
