export class User {
  _id?: string;
  username: string;
  password?: string;
  email: string;
  dob?: Date;
  firstName?: string;
  lastName?: string;
  sex?: string;
  constructor(user?: any) {
    if (user) {
      this._id = user._id;
      this.username = user.username;
      this.password = user.password;
      this.email = user.email;
      this.dob = user.dob;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.sex = user.sex;
    }
  }
}
