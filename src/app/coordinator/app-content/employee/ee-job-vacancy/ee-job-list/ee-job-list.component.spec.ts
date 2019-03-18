import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeJobListComponent } from './ee-job-list.component';

describe('EeJobListComponent', () => {
  let component: EeJobListComponent;
  let fixture: ComponentFixture<EeJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
