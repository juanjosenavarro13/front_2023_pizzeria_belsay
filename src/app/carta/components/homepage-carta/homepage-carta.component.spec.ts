import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCartaComponent } from './homepage-carta.component';

describe('HomepageCartaComponent', () => {
  let component: HomepageCartaComponent;
  let fixture: ComponentFixture<HomepageCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageCartaComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
