import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckIconComponent } from './check-icon.component';

describe('CheckIconComponent', () => {
  let component: CheckIconComponent;
  let fixture: ComponentFixture<CheckIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
