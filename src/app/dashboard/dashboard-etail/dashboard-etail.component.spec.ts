import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEtailComponent } from './dashboard-etail.component';

describe('DashboardEtailComponent', () => {
  let component: DashboardEtailComponent;
  let fixture: ComponentFixture<DashboardEtailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEtailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
