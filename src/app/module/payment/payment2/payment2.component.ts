import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styles: []
})
export class Payment2Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  submit()
  {
    this.router.navigate(['adm-payment3']);
  }
}
