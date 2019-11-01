import { User } from './user.model';

export class UserSession {
  user: User = new User();
  lastLogin: Date;
  created: Date;
  userAgent: string = navigator.userAgent;
  authenticated: boolean;
  rememberMe: boolean;
  constructor(session?: any) {
    if (session) {
      this.user = new User(session.user);
      this.lastLogin = session.lastLogin;
      this.created = session.created;
      this.userAgent = session.userAgent ? session.userAgent : navigator.userAgent;
      this.authenticated = session.authenticated;
      this.rememberMe = session.rememberMe;
    }
  }
}