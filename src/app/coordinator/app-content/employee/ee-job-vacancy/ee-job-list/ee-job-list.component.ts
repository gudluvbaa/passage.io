import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ee-job-list',
  templateUrl: './ee-job-list.component.html',
  styleUrls: ['./ee-job-list.component.css']
})
export class EeJobListComponent implements OnInit {
  currentRole:string = "求職";
  isFavourite: Boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {}

  changeRole(val) {
    switch(val){
      case 0:
        this.currentRole = "求職";
        break;
      case 1:
        this.currentRole = "徵人";
        break;
      case 2:
        this.currentRole = "進駐";
        break;
      default:
          //statements; 
        break; 
    } 
  }
  myFavourite() {
    if(this.isFavourite === true) {
      this.isFavourite = false;
    } else {
      this.isFavourite = true;
    }
  }
  showDetail() {
    this._router.navigate(['app/employee/vacancy-detail']);
  }
  mySetting() {
    this._router.navigate(['app/user-setting']);
  }
}
