import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/Users.interface';

import {
  faCheck,
  faUser,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() currentUser = {} as User
  checkIcon = faCheck
  invalidIcon = faTimes
  userIcon = faUser
  userIsValid = !!Object.keys(this.currentUser || {}).length
}
