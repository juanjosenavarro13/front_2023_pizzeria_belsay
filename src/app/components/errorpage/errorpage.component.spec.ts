import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ErrorpageComponent } from './errorpage.component';

describe('ErrorpageComponent', () => {
  let component: ErrorpageComponent;
  let fixture: ComponentFixture<ErrorpageComponent>;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorpageComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (done: DoneFn) => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();

    setTimeout(() => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
      done();
    }, 3500);
  });
});
