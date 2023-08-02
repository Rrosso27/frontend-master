import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterEditResumenesComponent } from './master-edit-resumenes.component';

describe('MasterEditResumenesComponent', () => {
  let component: MasterEditResumenesComponent;
  let fixture: ComponentFixture<MasterEditResumenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterEditResumenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterEditResumenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
