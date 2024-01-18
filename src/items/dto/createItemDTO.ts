import {
  IsString,
  IsArray,
  ArrayMinSize,
  IsNotEmpty,
  IsObject,
  ValidateNested,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class DescDto {
  @IsArray()
  @ArrayMinSize(1)
  featureAndSpec: string[];

  @IsArray()
  @ArrayMinSize(0)
  safetyAndUsage: string[];

  @IsString()
  @IsNotEmpty()
  sizeAndDimensions: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  material: string;
}

export class TenureDurationDto {
  @IsNumber()
  @IsNotEmpty()
  minDuration: number;

  @IsNumber()
  @IsNotEmpty()
  maxDuration: number;
}

export class CostDto {
  @IsString()
  @IsNotEmpty()
  time: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  imageURL: string[];

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsObject()
  @ValidateNested()
  @Type(() => DescDto)
  desc: DescDto;

  @IsObject()
  @ValidateNested()
  @Type(() => TenureDurationDto)
  tenureDuration: TenureDurationDto;

  @IsObject()
  @ValidateNested()
  @Type(() => CostDto)
  cost: CostDto;

  @IsBoolean()
  @IsNotEmpty()
  available: boolean;
}
