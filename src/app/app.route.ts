import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main';
import { ChildComponent } from './child/child';
import { Child2Component } from './child2/child2';
import { ChildoComponent } from './childo/childo';
import { ChildTComponent } from './childT/childT';
export const ROUTES: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'setA', component: ChildComponent,
        children: [
          { path: 'o', component: ChildoComponent },
        ],
      },
      {
        path: 'setB/:username/:eid', component: Child2Component, 
        children: [
          { path: 'b', component: ChildTComponent },
        ],
      },
      { path: 'setC', loadChildren: './childMain/Module#Module' },
      //  { path: 'setC/:username', component: Child3Component },
      { path: 'setD/:username/:eid', loadChildren: './child4/Module#Module' },
      //  { path: 'setD/:username', component: Child4Component },

    ]

  },
  { path: '**', redirectTo: '/main/setA' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
export const Components = [
  MainComponent,
  ChildComponent,
  Child2Component,
  ChildoComponent,
  ChildTComponent
];