import { Component, Input } from '@angular/core';
import { Step } from 'src/app/interfaces/Steps.interface';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() currentStep:Step = {} as Step
  @Input() steps:Step[] = []

  onChangeStep(step: Step): void {
    this.currentStep = step
    step.action(step)
  }

  isCurrentStep(step: Step):boolean {
    return step.name === this.currentStep.name
  }
}
