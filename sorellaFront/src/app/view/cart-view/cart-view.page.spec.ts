import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartViewPage } from './cart-view.page';

describe('CartViewPage', () => {
  let component: CartViewPage;
  let fixture: ComponentFixture<CartViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
