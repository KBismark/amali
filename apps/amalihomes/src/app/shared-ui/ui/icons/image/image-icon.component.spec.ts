import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageIconComponent } from './image-icon.component';

describe('ImageIconComponent', () => {
  let component: ImageIconComponent;
  let fixture: ComponentFixture<ImageIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
