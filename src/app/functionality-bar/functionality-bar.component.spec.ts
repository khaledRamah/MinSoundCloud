import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityBarComponent } from './functionality-bar.component';

describe('FunctionalityBarComponent', () => {
  let component: FunctionalityBarComponent;
  let fixture: ComponentFixture<FunctionalityBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalityBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
