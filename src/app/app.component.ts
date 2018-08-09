import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  next() {
    this._setSelectIndex(this.iCurrentSelIndex + 1);
  }
  prev() {
    this._setSelectIndex(this.iCurrentSelIndex - 1);
  }
  showSelectPic(sIndex) {
    for (var i = 0; i < this.collection.length; i++) {
      this.collection[i].active = false;
    }
    this.collection[sIndex].active = true;
    this.iCurrentSelIndex = sIndex;
  }
  _setSelectIndex(iNewIndex) {
    if (this.iCurrentSelIndex === this.collection.length - 1 && iNewIndex > this.iCurrentSelIndex) {
      this.iCurrentSelIndex = 0;
    } else if (this.iCurrentSelIndex === 0 && iNewIndex < this.iCurrentSelIndex) {
      this.iCurrentSelIndex = this.collection.length - 1;
    } else {
      this.iCurrentSelIndex = iNewIndex;
    }
    this.showSelectPic(this.iCurrentSelIndex);
  }
}
