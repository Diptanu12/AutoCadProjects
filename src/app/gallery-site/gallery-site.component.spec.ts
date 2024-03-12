import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySiteComponent } from './gallery-site.component';

describe('GallerySiteComponent', () => {
  let component: GallerySiteComponent;
  let fixture: ComponentFixture<GallerySiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerySiteComponent]
    });
    fixture = TestBed.createComponent(GallerySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
