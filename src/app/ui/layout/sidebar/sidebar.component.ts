import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
  <section class="sidenav-content">
    <a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a class="nav-link" routerLink="/adm-registation" routerLinkActive="active">ADM Registration</a>
    <a class="nav-link" routerLink="/adm-payment" routerLinkActive="active">ADM Payment</a>
    <section class="nav-group collapsible">
      <input id="tabexample1" type="checkbox">
      <label for="tabexample1">Report</label>
      <ul class="nav-list">
        <li><a class="nav-link">Report-1</a></li>
        <li><a class="nav-link">Report-2</a></li>
      </ul>
    </section>
    
  </section>
</nav>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
