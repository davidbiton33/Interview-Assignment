/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BabyFormComponent } from './baby-form.component';

describe('BabyFormComponent', () => {
  let component: BabyFormComponent;
  let fixture: ComponentFixture<BabyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
