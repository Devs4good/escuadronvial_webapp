import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpezarComponent } from './empezar.component';

describe('EmpezarComponent', () => {
  let component: EmpezarComponent;
  let fixture: ComponentFixture<EmpezarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpezarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
