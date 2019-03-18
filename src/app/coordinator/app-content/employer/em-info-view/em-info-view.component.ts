import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-em-info-view',
  templateUrl: './em-info-view.component.html',
  styleUrls: ['./em-info-view.component.css']
})
export class EmInfoViewComponent implements OnInit {
  isFavourite: Boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() { }

  myFavourite() {
    console.log("click");
    if(this.isFavourite === true) {
      this.isFavourite = false;
    } else {
      this.isFavourite = true;
    }
  }
  goBack() {
    this._router.navigate(['app/employee/vacancy-detail']);
  }
}
