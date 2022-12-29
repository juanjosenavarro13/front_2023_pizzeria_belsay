import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPluginComponent } from './facebook-plugin.component';

describe('FacebookPluginComponent', () => {
  let component: FacebookPluginComponent;
  let fixture: ComponentFixture<FacebookPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
