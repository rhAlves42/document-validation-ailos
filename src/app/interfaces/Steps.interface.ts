export interface Step {
  name: string;
  action: (step: Step) => void
}
