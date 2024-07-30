import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartamentsListComponent } from './apartments-list.component';

describe('ApartmentListComponent', () => {
  let component: ApartamentsListComponent;
  let fixture: ComponentFixture<ApartamentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartamentsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApartamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
