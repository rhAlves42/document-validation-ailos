import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperComponent ],
      imports: [FontAwesomeModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render the steps properly', () => {
    const MOCK = [
      {
        action: () => {},
        name: '1'
      },
      {
        action: () => {},
        name: '2'
      },
    ];

    component.steps = MOCK
    fixture.detectChanges()

    expect(fixture.debugElement.nativeElement.querySelector(`#step-${MOCK[0].name}`).innerText).toEqual(MOCK[0].name)
  });
});
