import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async logIn(userCred: any): Promise<string> {
    return await this.userService.authenticateUser(userCred);
  }

  deleteUser(): string {
    return 'user has been deleted';
  }
}
