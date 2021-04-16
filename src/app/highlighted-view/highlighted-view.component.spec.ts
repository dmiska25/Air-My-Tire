import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedViewComponent } from './highlighted-view.component';

describe('HighlightedViewComponent', () => {
  let component: HighlightedViewComponent;
  let fixture: ComponentFixture<HighlightedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
