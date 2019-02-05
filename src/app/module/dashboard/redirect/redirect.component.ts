import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  template: `
    <p>
      redirect works!
    </p>
  `,
  templateUrl: './redirect.component.html',
  styles: []
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
