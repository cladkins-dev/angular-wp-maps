import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGmapsComponent } from './custom-gmaps.component';

describe('CustomGmapsComponent', () => {
  let component: CustomGmapsComponent;
  let fixture: ComponentFixture<CustomGmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomGmapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
