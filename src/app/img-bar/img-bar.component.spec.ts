import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBarComponent } from './img-bar.component';

describe('ImgBarComponent', () => {
  let component: ImgBarComponent;
  let fixture: ComponentFixture<ImgBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
