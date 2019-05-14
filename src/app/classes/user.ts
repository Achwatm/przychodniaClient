export class User {
  pesel: number;
  password: string;
  role: string;
constructor(pesel, password, role) {
  this.pesel = pesel;
  this.password = password;
  this.role = role;
  }
}

