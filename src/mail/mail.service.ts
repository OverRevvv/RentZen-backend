import { Injectable, NotFoundException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async testMail(): Promise<string> {
    try {
      await this.mailerService.sendMail({
        to: 'dehex18366@minhlun.com',
        subject: 'Testing Nest MailerModule ✔',
        html: '<b>Testing this mail</b>',
      });
      return 'mail sent';
    } catch (error) {
      throw new NotFoundException(`Error in sending mail ${error}`);
    }
  }

  async sendverificationMail(email: string, token: string) {
    const verificationLink: string =
      process.env.ENV === 'dev'
        ? `http://localhost:3000/users/verify?id=${token}`
        : `https://rentzenserver.cyclic.app/users/verify?id=${token}`;

    try {
      await this.mailerService.sendMail({
        to: email,
        subject: `Verify your mail ${email}!`,
        template: 'VerifyUserMail',
        context: { verificationLink },
      });
      return 'mail sent';
    } catch (error) {
      throw new NotFoundException(`Error in sending mail ${error}`);
    }
  }
}
