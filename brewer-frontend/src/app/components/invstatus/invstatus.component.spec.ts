import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvstatusComponent } from './invstatus.component';

describe('InvstatusComponent', () => {
  let component: InvstatusComponent;
  let fixture: ComponentFixture<InvstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
