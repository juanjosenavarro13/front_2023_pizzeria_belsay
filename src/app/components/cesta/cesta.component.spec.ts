import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CestaComponent } from './cesta.component';

describe('cestaComponent', () => {
  let component: CestaComponent;
  let fixture: ComponentFixture<CestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CestaComponent],
      imports: [FormsModule, ReactiveFormsModule],
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

  it('send', () => {
    component.send('local', 'hornilla 5', '');
    component.send('domicilio', '', 'comentario');

    expect(1).toEqual(1);
  });
});
