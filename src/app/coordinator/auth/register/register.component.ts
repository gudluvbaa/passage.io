import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this._router.navigate(['']);
  }
  goNext(val) {
    switch(val){
      case 'employee':
        this._router.navigate(['app/employee/info']);
        break;
      case 'employer':
        this._router.navigate(['']);
        break;
      case 'incubMember':
        this._router.navigate(['']);
        break;
      case 'guest':
        this._router.navigate(['app/employee/vacancy-list']);
        break;
      default:
          //statements; 
        break; 
    } 
  }
}
