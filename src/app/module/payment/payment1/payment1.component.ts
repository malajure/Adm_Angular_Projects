import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.component.html',
  styles: []
})
export class Payment1Component implements OnInit {

  constructor(private router : Router,public route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit()
  {
    console.log("sdfghjk");
   // this.router.navigate(['adm-payment2'],{relativeTo:this.route});
   this.router.navigate(['adm-payment2']);
  }

}
