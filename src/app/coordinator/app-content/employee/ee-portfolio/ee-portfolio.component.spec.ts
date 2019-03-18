import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EePortfolioComponent } from './ee-portfolio.component';

describe('EeJobPortfolioComponent', () => {
  let component: EePortfolioComponent;
  let fixture: ComponentFixture<EePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
