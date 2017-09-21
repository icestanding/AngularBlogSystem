import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcardComponent } from './blogcard.component';

describe('BlogcardComponent', () => {
  let component: BlogcardComponent;
  let fixture: ComponentFixture<BlogcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
