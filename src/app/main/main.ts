import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent {
  public title = 'my-app1';
  public iNumber = 0;
  public iFalag:number;
  public dialogVisible=false;
  public currentSelect=0;
  public tabs = [
    {
      name: 'A',
      active: true,
      path:'/main/setA',
      username:"yangyi",
      eid:'yi.yang'
    },
    {
      name: 'B',
      active: false,
      path:'/main/setB',
      username:"liuao",
      eid:'ao.liu'
    },
    {
      name: 'C',
      active: false,
      path:'/main/setC',
      username:"zhaojun",
      eid:'jun.zhao'
    },
    {
      name: 'D',
      active: false,
      path:'/main/setD',
      username:"jiayuzhuo",
      eid:'yuzhuo.jia'
    }
  ];
  constructor(private router: Router){}
  changeTab(index){
    for (var i = 0; i < this.tabs.length; i++) {
      if(this.tabs[i].active){
        this.currentSelect=i
      };
      this.tabs[i].active = false;
    }
    this.tabs[index].active=true;
    if(index!==this.currentSelect){
      if(index===0){
        this.router.navigate([this.tabs[index].path],{queryParams:{username:this.tabs[this.currentSelect].username,eid:this.tabs[this.currentSelect].eid}});
      }else if(index===1){
        this.router.navigate([this.tabs[index].path,this.tabs[this.currentSelect].username,this.tabs[this.currentSelect].eid]);
      }else if(index===2){
        this.router.navigate([this.tabs[index].path]);
      }else{
        this.router.navigate([this.tabs[index].path,this.tabs[this.currentSelect].username,this.tabs[this.currentSelect].eid]);
      }
    }
   
  }
}
