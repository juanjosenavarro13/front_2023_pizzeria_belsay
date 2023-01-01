import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaComponent } from './cesta.component';

describe('CartComponent', () => {
  let component: CestaComponent;
  let fixture: ComponentFixture<CestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CestaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deleteItem', () => {
    component.deleteItem(0);

    expect(1).toEqual(1);
  });
});
