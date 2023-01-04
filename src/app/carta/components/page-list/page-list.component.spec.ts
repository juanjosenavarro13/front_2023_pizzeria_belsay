import { CestaService } from '../../../services/cesta.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageListComponent } from './page-list.component';
import { categories_type } from '../../../models/carta.model';

describe('PageCategoryComponent', () => {
  let component: PageListComponent;
  let fixture: ComponentFixture<PageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListComponent],
      imports: [RouterTestingModule],
      providers: [CestaService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.componentInstance;
    component.category = categories_type.Pizzas;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the category name', () => {
    expect(component.validatedCategory(categories_type.Pizzas)).toBeTruthy();
    expect(component.validatedCategory('categoria-3')).toBeFalsy();
  });
});
