import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmInfoViewComponent } from './em-info-view.component';

describe('EnInfoViewComponent', () => {
  let component: EmInfoViewComponent;
  let fixture: ComponentFixture<EmInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
