import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCarPageComponent } from './shoping-car-page.component';

describe('ShopingCarPageComponent', () => {
  let component: ShopingCarPageComponent;
  let fixture: ComponentFixture<ShopingCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
