import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErikComponentComponent } from './erik-component.component';

describe('ErikComponentComponent', () => {
  let component: ErikComponentComponent;
  let fixture: ComponentFixture<ErikComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErikComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErikComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
