import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', (done: DoneFn) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(fixture).toBeTruthy();
    expect(app).toBeTruthy();

    expect(app.loading).toBeTruthy();

    setTimeout(() => {
      expect(app.loading).toEqual(false);
      done();
    }, 2500);
  });
});
