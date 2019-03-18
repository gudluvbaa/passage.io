import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeJobDetailComponent } from './ee-job-detail.component';

describe('EeJobDetailComponent', () => {
  let component: EeJobDetailComponent;
  let fixture: ComponentFixture<EeJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
