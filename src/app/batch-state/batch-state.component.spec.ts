import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchStateComponent } from './batch-state.component';

describe('BatchStateComponent', () => {
  let component: BatchStateComponent;
  let fixture: ComponentFixture<BatchStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
