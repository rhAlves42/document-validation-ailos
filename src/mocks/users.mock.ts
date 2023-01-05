import { User } from "src/app/interfaces/Users.interface";

export const usersList = [
  {
    name:'Teresinha Luana Bruna Silva',
    cpf: '93115906650',
    isCpfValid: true
  },
  {
    name:'Josefa Rita Peixoto',
    cpf: '75639031786',
    isCpfValid: true
  }
] as User[]


export const findUserByCpf = (cpf: string): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentUser = usersList.find(user => user.cpf === cpf) as User
      resolve(currentUser)
    }, 300)
  })
}
