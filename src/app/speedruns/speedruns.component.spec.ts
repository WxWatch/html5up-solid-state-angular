import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedrunsComponent } from './speedruns.component';

describe('SpeedrunsComponent', () => {
  let component: SpeedrunsComponent;
  let fixture: ComponentFixture<SpeedrunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedrunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedrunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
