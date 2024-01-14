import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './createItemDTO';

export class UpdateItemDto extends PartialType(CreateItemDto) {}
