import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-em-info-view',
  templateUrl: './em-info-view.component.html',
  styleUrls: ['./em-info-view.component.css']
})
export class EmInfoViewComponent implements OnInit {
  companyIsFavourite: Boolean = false;
  jobIsFavourite: Boolean = false;
  text: string = "我絕不承認兩顆真心的結合，有任何障礙。這樣的愛不是真愛。若是遇有變節的機會就改變，或是被強勢剝離就屈服；哦，那不是愛！愛是堅定的烽火，凝視著狂濤而不動搖； 愛是嚮導迷航船隻的明星，高度可測，實價無量。"

  constructor(private _router: Router) { }

  ngOnInit() { }

  companyAddFavourite() {
    console.log("click");
    if(this.companyIsFavourite === true) {
      this.companyIsFavourite = false;
    } else {
      this.companyIsFavourite = true;
    }
  }
  jobAddFavourite() {
    console.log("click");
    if(this.jobIsFavourite === true) {
      this.jobIsFavourite = false;
    } else {
      this.jobIsFavourite = true;
    }
  }
  selectJoob() {
    this._router.navigate(['app/employee/vacancy-detail']);
  }
  goBack() {
    this._router.navigate(['app/employee/vacancy-detail']);
  }
}
