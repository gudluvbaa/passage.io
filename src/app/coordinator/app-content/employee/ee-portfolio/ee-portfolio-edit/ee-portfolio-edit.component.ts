import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ee-portfolio-edit',
  templateUrl: './ee-portfolio-edit.component.html',
  styleUrls: ['./ee-portfolio-edit.component.css']
})
export class EePortfolioEditComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goSetInfo() {
    this._router.navigate(['app/employee/info']);
  }
}
