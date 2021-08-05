import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCloudsComponent } from './footer-clouds.component';

describe('FooterCloudsComponent', () => {
  let component: FooterCloudsComponent;
  let fixture: ComponentFixture<FooterCloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCloudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
