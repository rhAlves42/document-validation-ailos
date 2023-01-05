import { Component } from '@angular/core';
import {
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import cpfMask from 'src/app/utils/masks/cpf'

import { User } from 'src/app/interfaces/Users.interface';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cooperated-identification',
  templateUrl: './cooperated-identification.component.html',
  styleUrls: ['./cooperated-identification.component.scss'],
})
export class CooperatedIdentificationComponent  {
  cpfValue = ''
  isCpfValid = false
  isLoading = false
  users = [] as User[]
  spinnerIcon = faSpinner
  currentUser = {} as User
  userWasFound = false
  constructor(public userService: UserService) {}

  onInputChange(cpf: string): void {
    this.currentUser = {} as User
    if (cpf === '111.111.111-11'|| !/\d+/g.test(cpf)) {
      this.isCpfValid = true
      return
    }
    this.isCpfValid = cpf.length === 14 && /\d+/g.test(cpf)
    this.cpfValue = cpfMask(cpf)
  }

  async makeSearch(): Promise<void> {
    if (!this.cpfValue) return
    this.isLoading = true

    await this.userService.findUser(this.cpfValue)


    this.userWasFound = !!Object.keys(this.userService.currentUser||{}).length
    this.isLoading = false

    this.users.push(this.userService.currentUser)
  }


}
