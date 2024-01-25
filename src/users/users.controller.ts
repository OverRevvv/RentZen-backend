import {
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUserDTO';
import { user } from './model/user.model';
import { JwtGuard } from 'src/auth/guards/jwt.auth.guard';
// import { UpdateUserDTO } from './dto/updateUserDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<string> {
    return await this.userService.createUser(createUserDto);
  }

  @Get('get')
  @UseGuards(JwtGuard)
  @HttpCode(200)
  async getUser(@Query('id') userID: string): Promise<user> {
    // todo : manage private profile data and public profile data
    return await this.userService.getUser(userID);
  }
}
