import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTranComponent } from './content-tran.component';

describe('ContentTranComponent', () => {
  let component: ContentTranComponent;
  let fixture: ComponentFixture<ContentTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
