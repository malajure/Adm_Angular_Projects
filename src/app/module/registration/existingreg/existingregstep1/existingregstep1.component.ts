import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-existingregstep1',
  templateUrl: './existingregstep1.component.html',
  styles: []
})
export class Existingregstep1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSearch(){
    this.router.navigate(['dashboard']);
  }

}
