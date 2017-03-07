import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JidiPreviewComponent } from './jidi-preview.component';

describe('JidiPreviewComponent', () => {
  let component: JidiPreviewComponent;
  let fixture: ComponentFixture<JidiPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JidiPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JidiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
