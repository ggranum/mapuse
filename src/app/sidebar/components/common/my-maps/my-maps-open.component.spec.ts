import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMapsOpenComponent } from './my-maps-open.component';

describe('MyMapsOpenComponent', () => {
  let component: MyMapsOpenComponent;
  let fixture: ComponentFixture<MyMapsOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMapsOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMapsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
