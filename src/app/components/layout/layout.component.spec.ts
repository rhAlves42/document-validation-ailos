import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CooperatedIdentificationComponent } from '../onboarding/cooperated-identification/cooperated-identification.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { StepperComponent } from '../stepper/stepper.component';
import { UserCardComponent } from '../user-card/user-card.component';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        StepperComponent,
        OnboardingComponent,
        CooperatedIdentificationComponent,
        UserCardComponent,
      ],
      imports: [
        FontAwesomeModule,
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
