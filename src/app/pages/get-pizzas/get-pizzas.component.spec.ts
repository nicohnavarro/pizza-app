import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzasComponent } from './get-pizzas.component';

describe('GetPizzasComponent', () => {
  let component: GetPizzasComponent;
  let fixture: ComponentFixture<GetPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
