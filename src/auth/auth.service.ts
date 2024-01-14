import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn(): string {
    return 'Sign In';
  }

  logIn(): string {
    return 'Log In';
  }

  deleteUser(): string {
    return 'user has been deleted';
  }
}
