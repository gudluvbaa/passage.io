import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EePortfolioPreviewComponent } from './ee-portfolio-preview.component';

describe('EePortfolioPreviewComponent', () => {
  let component: EePortfolioPreviewComponent;
  let fixture: ComponentFixture<EePortfolioPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EePortfolioPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EePortfolioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
