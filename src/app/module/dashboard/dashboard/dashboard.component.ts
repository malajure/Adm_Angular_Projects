import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
  <div __ngcontent-c1="">
  <h1>Color Palette</h1>
  </div>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.



  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim
  eget massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat
  vitae sem at, tincidunt elementum magna. Phasellus tristique posuere dui, ut tempus felis sagittis
  quis. Integer iaculis ultrices elit, sed venenatis eros. Vivamus interdum semper velit eget gravida.
  Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien purus
  volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus
  non, imperdiet ipsum.
</p>
  `,
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    console.log("testinggggg");
    this.router.navigate(['/redirect']);
  } 

  }

