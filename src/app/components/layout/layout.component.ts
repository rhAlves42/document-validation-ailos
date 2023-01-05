import { Component } from '@angular/core';
import {
  faSearch,
  faBars,
  faHome,
  faStar,
  faMessage,
  faBank,
} from '@fortawesome/free-solid-svg-icons';
import { paths, steps } from 'src/mocks/step.mock';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
  pageTitle = 'Nova Admissão Cooperado'
  navIcons = [
    faBars,
    faSearch,
    faHome,
    faStar,
    faMessage,
    faBank,
  ]

  breadcrumb = paths
  steps = steps
  currentStep = steps[0]
}
