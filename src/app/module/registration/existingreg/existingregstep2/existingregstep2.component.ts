import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-existingregstep2',
  templateUrl: './existingregstep2.component.html',
  styles: []
})
export class Existingregstep2Component implements OnInit {

  constructor(private router : Router) { }


  ngOnInit() {
  }
  onSearch(){
    this.router.navigate(['/existing-registation-3']);
  }


}
