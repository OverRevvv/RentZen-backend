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
import { UpdateUserDTO } from './dto/updateUserDTO';
import { MailService } from 'src/mail/mail.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly mailService: MailService,
  ) {}

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
  @Post('update')
  @UseGuards(JwtGuard)
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateUser(
    @Query('id') userID: string,
    @Body() userData: UpdateUserDTO,
  ): Promise<string> {
    return await this.userService.updateUser(userID, userData);
  }

  @Get('verify')
  @HttpCode(200)
  // @UsePipes(ValidationPipe)
  async verifyUser(
    @Query('id') userID: string,
    @Query('email') email: string,
  ): Promise<string> {
    const verify = {
      verified: true,
    };
    const updated = await this.userService.updateUser(userID, verify);
    if (updated) {
      await this.mailService.sendVerifiedMail(email);
      return 'User verified successfully';
    }
    return 'Something went wrong';
    // try {
    // } catch (error) {}
  }
}
