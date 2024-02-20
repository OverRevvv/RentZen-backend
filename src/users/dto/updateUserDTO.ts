import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './createUserDTO';
import { IsBoolean } from 'class-validator';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @IsBoolean()
  verified: boolean;
}
