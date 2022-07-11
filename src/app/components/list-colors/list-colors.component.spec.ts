import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColorsComponent } from './list-colors.component';

describe('ListColorsComponent', () => {
  let component: ListColorsComponent;
  let fixture: ComponentFixture<ListColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
