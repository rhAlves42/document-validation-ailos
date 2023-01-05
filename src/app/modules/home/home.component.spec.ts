import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { CooperatedIdentificationComponent } from 'src/app/components/onboarding/cooperated-identification/cooperated-identification.component';
import { OnboardingComponent } from 'src/app/components/onboarding/onboarding.component';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LayoutComponent,
        StepperComponent,
        OnboardingComponent,
        CooperatedIdentificationComponent,
        UserCardComponent
      ],
      imports: [
        FontAwesomeModule,
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
