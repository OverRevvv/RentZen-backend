import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          service: 'Gmail',
          host: config.get<string>('MAIL_HOST'),
          port: config.get<number>('MAIL_PORT'),
          ignoreTLS: false,
          secure: true,
          auth: {
            user: config.get<string>('EMAIL'),
            pass: config.get<string>('EMAIL_PASS'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get<string>('EMAIL')}>`,
        },
        template: {
          dir: process.cwd() + '/src/mail/templates',
          adapter: new PugAdapter({ inlineCssEnabled: true }),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
