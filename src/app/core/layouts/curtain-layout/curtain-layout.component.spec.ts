import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainLayoutComponent } from './curtain-layout.component';

describe('CurtainLayoutComponent', () => {
  let component: CurtainLayoutComponent;
  let fixture: ComponentFixture<CurtainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
