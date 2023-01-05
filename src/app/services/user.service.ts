
import { Injectable } from '@angular/core';
import { findUserByCpf } from 'src/mocks/users.mock';
import { User } from '../interfaces/Users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 currentUser = {} as User
 users = [] as unknown[]

  async findUser(cpf: string) {
    const cleanedCpf = cpf.replaceAll('.', '').replaceAll('-', '')
    const user = await findUserByCpf(cleanedCpf)
    this.currentUser = user
    this.users.push(user)
  }
}
