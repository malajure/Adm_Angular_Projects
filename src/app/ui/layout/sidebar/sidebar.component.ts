import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <a clrVerticalNavLink routerLink="./dashboard" routerLinkActive="active">
  <clr-icon clrVerticalNavIcon shape="dashboard"></clr-icon>Dashboard</a>

  <a clrVerticalNavLink routerLink="./adm-payment" routerLinkActive="active">
  <clr-icon clrVerticalNavIcon shape="dollar-bill"></clr-icon>One Time Payment</a>

  <clr-vertical-nav-group routerLinkActive="active">
  <clr-icon shape="add-text" clrVerticalNavIcon></clr-icon>ADM Registration
    <clr-vertical-nav-group-children>
      <a clrVerticalNavLink routerLink="./adm-registation" routerLinkActive="active">New Policy Registration</a>
      <a clrVerticalNavLink routerLink="./electric/raichu" routerLinkActive="active">Existing Policy Registration</a>
    </clr-vertical-nav-group-children>
</clr-vertical-nav-group>

  

  <clr-vertical-nav-group routerLinkActive="active">
    <clr-icon shape="bar-chart" clrVerticalNavIcon></clr-icon>Reports
      <clr-vertical-nav-group-children>
        <a clrVerticalNavLink routerLink="./electric/pikachu" routerLinkActive="active">Registration Report</a>
        <a clrVerticalNavLink routerLink="./electric/raichu" routerLinkActive="active">Payment Report</a>
      </clr-vertical-nav-group-children>
  </clr-vertical-nav-group>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
