import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ee-job-detail',
  templateUrl: './ee-job-detail.component.html',
  styleUrls: ['./ee-job-detail.component.css']
})
export class EeJobDetailComponent implements OnInit {
  isFavourite: Boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {}


  myFavourite() {
    console.log("click");
    if(this.isFavourite === true) {
      this.isFavourite = false;
    } else {
      this.isFavourite = true;
    }
  }
  goBack() {
    this._router.navigate(['app/employee/vacancy-list']);
  }
  toCompanyDetail() {
    this._router.navigate(['app/employer/info']);
  }
  
}
