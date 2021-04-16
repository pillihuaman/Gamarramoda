import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamachicasProductComponent } from './gamachicas-product.component';

describe('GamachicasProductComponent', () => {
  let component: GamachicasProductComponent;
  let fixture: ComponentFixture<GamachicasProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamachicasProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamachicasProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
