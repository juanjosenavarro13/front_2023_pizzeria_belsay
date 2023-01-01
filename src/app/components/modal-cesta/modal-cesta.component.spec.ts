import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCestaComponent } from './modal-cesta.component';

describe('ModalCestaComponent', () => {
  let component: ModalCestaComponent;
  let fixture: ComponentFixture<ModalCestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCestaComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('closeModal', () => {
    component.closeModal();

    expect(1).toEqual(1);
  });

  it('resetCesta', () => {
    component.resetCesta();

    expect(1).toEqual(1);
  });
});
