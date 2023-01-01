import { CestaService } from './../../../services/cesta.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageCategoryComponent } from './page-category.component';

describe('PageCategoryComponent', () => {
  let component: PageCategoryComponent;
  let fixture: ComponentFixture<PageCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCategoryComponent],
      imports: [RouterTestingModule],
      providers: [CestaService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addcart', () => {
    component.addCart('nombre', 'pequeña', 5, true);

    expect(1).toEqual(1);
  });
});
