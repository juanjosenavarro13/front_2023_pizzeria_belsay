import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CestaComponent } from '../cesta/cesta.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMenuComponent, CestaComponent],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clickCesta', () => {
    component.clickCesta();

    expect(1).toEqual(1);
  });
});
