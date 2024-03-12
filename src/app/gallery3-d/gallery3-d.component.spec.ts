import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery3DComponent } from './gallery3-d.component';

describe('Gallery3DComponent', () => {
  let component: Gallery3DComponent;
  let fixture: ComponentFixture<Gallery3DComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery3DComponent]
    });
    fixture = TestBed.createComponent(Gallery3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
