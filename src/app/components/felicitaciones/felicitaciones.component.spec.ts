import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicitacionesComponent } from './felicitaciones.component';

describe('FelicitacionesComponent', () => {
  let component: FelicitacionesComponent;
  let fixture: ComponentFixture<FelicitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelicitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelicitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
