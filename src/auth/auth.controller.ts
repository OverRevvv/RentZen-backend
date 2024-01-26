import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Body,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth.gaurd';
import { loginCredentialDTO } from './dto/loginCredentialDTO';
import { RefreshJwtGuard } from './guards/jwtRefresh.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @UsePipes(ValidationPipe)
  async logIn(@Body() payload: loginCredentialDTO): Promise<any> {
    return await this.authService.login(payload);
  }

  @Post('refresh')
  @UseGuards(RefreshJwtGuard)
  @UsePipes(ValidationPipe)
  async refreshToken(@Request() req: any): Promise<any> {
    return await this.authService.refreshToken(req.user);
  }
}
