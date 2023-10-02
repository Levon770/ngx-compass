import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCompassComponent } from './ngx-compass.component';

describe('NgxCompassComponent', () => {
  let component: NgxCompassComponent;
  let fixture: ComponentFixture<NgxCompassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxCompassComponent]
    });
    fixture = TestBed.createComponent(NgxCompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
