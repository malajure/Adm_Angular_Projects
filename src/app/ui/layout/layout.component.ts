import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <clr-main-container>
        <app-header></app-header>
        <div class="content-container">
            <div class="content-area">
              <router-outlet></router-outlet>
            </div>
            <clr-vertical-nav class="sidenav" [clr-nav-level]="1" [clrVerticalNavCollapsible]="true" class="nav-trigger--bottom">
            <app-sidebar></app-sidebar>
            </clr-vertical-nav>
        </div>
    </clr-main-container>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
