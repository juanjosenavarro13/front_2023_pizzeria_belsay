import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCartaComponent } from './homepage-carta.component';

describe('HomepageCartaComponent', () => {
  let component: HomepageCartaComponent;
  let fixture: ComponentFixture<HomepageCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageCartaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
