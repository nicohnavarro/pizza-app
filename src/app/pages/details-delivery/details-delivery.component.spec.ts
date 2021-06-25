import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeliveryComponent } from './details-delivery.component';

describe('DetailsDeliveryComponent', () => {
  let component: DetailsDeliveryComponent;
  let fixture: ComponentFixture<DetailsDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
