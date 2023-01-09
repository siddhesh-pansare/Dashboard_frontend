import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeboxComponent } from './dialogebox.component';

describe('DialogeboxComponent', () => {
  let component: DialogeboxComponent;
  let fixture: ComponentFixture<DialogeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
