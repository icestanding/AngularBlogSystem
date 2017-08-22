import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginheaderComponent } from './loginheader.component';

describe('LoginheaderComponent', () => {
  let component: LoginheaderComponent;
  let fixture: ComponentFixture<LoginheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
