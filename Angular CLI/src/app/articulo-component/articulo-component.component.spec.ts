import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloComponentComponent } from './articulo-component.component';

describe('ArticuloComponentComponent', () => {
  let component: ArticuloComponentComponent;
  let fixture: ComponentFixture<ArticuloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
