import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasinformacionComponent } from './masinformacion.component';

describe('MasinformacionComponent', () => {
  let component: MasinformacionComponent;
  let fixture: ComponentFixture<MasinformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasinformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasinformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
