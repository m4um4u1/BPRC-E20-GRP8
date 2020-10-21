import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvstatusItemComponent } from './invstatus-item.component';

describe('InvstatusItemComponent', () => {
  let component: InvstatusItemComponent;
  let fixture: ComponentFixture<InvstatusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvstatusItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvstatusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
