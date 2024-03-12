import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2DComponent } from './gallery2-d.component';

describe('Gallery2DComponent', () => {
  let component: Gallery2DComponent;
  let fixture: ComponentFixture<Gallery2DComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery2DComponent]
    });
    fixture = TestBed.createComponent(Gallery2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
