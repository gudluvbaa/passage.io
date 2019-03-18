import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeInfoFormComponent } from './ee-info-form.component';

describe('EeInfoFormComponent', () => {
  let component: EeInfoFormComponent;
  let fixture: ComponentFixture<EeInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
