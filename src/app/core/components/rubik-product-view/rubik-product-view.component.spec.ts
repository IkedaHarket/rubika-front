import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubikProductViewComponent } from './rubik-product-view.component';

describe('RubikProductViewComponent', () => {
  let component: RubikProductViewComponent;
  let fixture: ComponentFixture<RubikProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubikProductViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubikProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
