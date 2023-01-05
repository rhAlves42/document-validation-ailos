import { Component, Input } from '@angular/core';
import { Step } from 'src/app/interfaces/Steps.interface';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {
  @Input() currentStep: Step = {} as Step

}
