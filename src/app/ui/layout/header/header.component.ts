import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <clr-header class="header-4">
  
  <div class="branding">
    <a class="nav-link">
    <clr-icon shape="shield"></clr-icon>
    <span class="title">PNB Metlife Payment Portal</span>
    </a>
  </div>
  <div class="divider"></div>
  <div class="header-actions">
    <clr-dropdown class="dropdown bottom-right">
      <button class="nav-icon" clrDropdownToggle>
        <clr-icon shape="user"></clr-icon>
        <clr-icon shape="caret down"></clr-icon>
      </button>
      <div class="dropdown-menu">
        <a clrDropdownItem>About</a>
        <a clrDropdownItem>Preferences</a>
        <a clrDropdownItem>Log out</a>
      </div>
    </clr-dropdown>
  </div>
  
  </clr-header>

  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
