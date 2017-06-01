import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMapsListComponent } from './my-maps-list.component';

describe('MyMapsComponent', () => {
  let component: MyMapsListComponent;
  let fixture: ComponentFixture<MyMapsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMapsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
