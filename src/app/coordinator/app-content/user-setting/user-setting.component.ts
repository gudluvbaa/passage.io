import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  mySetting() {
    this._router.navigate(['app/user-setting']);
  }

  myPortfolio() {
    this._router.navigate(['app/employee/portfolio/edit']);
  }

  jobList() {
    this._router.navigate(['app/employee/vacancy-list']);
  }

}
