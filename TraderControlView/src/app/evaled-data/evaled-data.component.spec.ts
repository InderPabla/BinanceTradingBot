
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaledDataComponent } from './evaled-data.component';

describe('EvaledDataComponent', () => {
  let component: EvaledDataComponent;
  let fixture: ComponentFixture<EvaledDataComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaledDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaledDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
