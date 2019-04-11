import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ee-portfolio-preview',
  templateUrl: './ee-portfolio-preview.component.html',
  styleUrls: ['./ee-portfolio-preview.component.css']
})
export class EePortfolioPreviewComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this._router.navigate(['app/employee/portfolio/edit']);
  }
}
