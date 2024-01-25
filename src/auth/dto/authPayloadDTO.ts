import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class authPayloadDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
