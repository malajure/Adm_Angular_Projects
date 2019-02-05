import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registation',
  styleUrls: ['./../card.scss'],
  template: `
  <div class="clr-example ">
  <div class="clr-row">
    <div class="clr-col-lg-5 clr-col-md-8 clr-col-12">
      <div class="card  dox-header">
        <div class="card-header">
          Header
        </div>
        <div class="card-block">
          <div class="card-title">
            Block
          </div>
          <div class="card-text">
            Card content can contain text, links, images, data visualizations, lists and more.
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-sm btn-link">Footer Action 1</button>
          <button class="btn btn-sm btn-link">Footer Action 2</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class RegistationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
