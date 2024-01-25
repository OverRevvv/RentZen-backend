import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth.gaurd';
import { authPayloadDTO } from './dto/authPayloadDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @UsePipes(ValidationPipe)
  async logIn(@Body() payload: authPayloadDTO): Promise<any> {
    return await this.authService.login(payload);
  }
}
