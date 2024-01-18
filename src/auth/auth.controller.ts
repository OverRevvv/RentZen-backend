import {
  Controller,
  HttpCode,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { authUserDTO } from './dto/authUserDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async login(@Body() authUserDto: authUserDTO): Promise<string> {
    return await this.authService.logIn(authUserDto);
  }
}
