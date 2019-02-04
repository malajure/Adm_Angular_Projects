import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="content-container">
    <div class="content-area">
    <router-outlet></router-outlet>
    </div>
    <app-sidebar class="sidenav" [clr-nav-level]="2"></app-sidebar>
  </div>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
