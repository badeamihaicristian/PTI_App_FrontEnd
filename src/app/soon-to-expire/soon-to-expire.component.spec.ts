import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonToExpireComponent } from './soon-to-expire.component';

describe('SoonToExpireComponent', () => {
  let component: SoonToExpireComponent;
  let fixture: ComponentFixture<SoonToExpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoonToExpireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoonToExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
