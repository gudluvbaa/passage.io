import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EePortfolioEditComponent } from './ee-portfolio-edit.component';

describe('EePortfolioEditComponent', () => {
  let component: EePortfolioEditComponent;
  let fixture: ComponentFixture<EePortfolioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EePortfolioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EePortfolioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
