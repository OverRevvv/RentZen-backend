import { IsEmail, IsNotEmpty } from 'class-validator';

export class refreshTokenDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
