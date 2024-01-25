import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { user } from 'src/users/model/user.model';
import { authPayloadDTO } from './dto/authPayloadDTO';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<user | string | any> {
    const user = await this.userService.findOneWithEmail(email);
    if (!user) return null;
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return "password doesn't match";
  }

  async login(user: authPayloadDTO) {
    const payload = {
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  deleteUser(): string {
    return 'user has been deleted';
  }
}
