import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrationstep1',
  templateUrl: './registrationstep1.component.html',
  styles: []
})
export class Registrationstep1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Hi");
    this.router.navigate(['/adm-registation-2']);
  }

}
