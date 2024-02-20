import { Controller, Get, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('test')
  async testMail() {
    return await this.mailService.testMail();
  }

  @Get('verify')
  async sendVerificationMail(
    @Query('email') email: string,
    @Query('token') token: string,
  ): Promise<string> {
    return await this.mailService.sendverificationMail(email, token);
  }
}
