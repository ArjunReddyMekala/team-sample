import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycallletterComponent } from './mycallletter.component';

describe('MycallletterComponent', () => {
  let component: MycallletterComponent;
  let fixture: ComponentFixture<MycallletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycallletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycallletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
