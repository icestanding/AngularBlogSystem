import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulpageComponent } from './successfulpage.component';

describe('SuccessfulpageComponent', () => {
  let component: SuccessfulpageComponent;
  let fixture: ComponentFixture<SuccessfulpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
