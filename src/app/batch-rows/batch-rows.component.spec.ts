import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRowsComponent } from './batch-rows.component';

describe('BatchRowsComponent', () => {
  let component: BatchRowsComponent;
  let fixture: ComponentFixture<BatchRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
