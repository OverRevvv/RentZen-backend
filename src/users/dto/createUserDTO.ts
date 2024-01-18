import {
  IsString,
  IsArray,
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  IsEmail,
} from 'class-validator';

export class AddressDTO {
  @IsArray()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNumber()
  @IsNotEmpty()
  zip: number;

  @IsString()
  @IsNotEmpty()
  area: string;
}
export class CartItemDTO {
  @IsString()
  @IsNotEmpty()
  itemID: string;

  @IsNumber()
  @IsNotEmpty()
  tenureDuration: number;

  @IsNumber()
  @IsNotEmpty()
  tenurePrice: number;
}

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  phone: number;

  @IsArray()
  @ArrayMinSize(1)
  address: AddressDTO[];

  @IsArray()
  postedItems: string[];

  @IsArray()
  cartItems: CartItemDTO[];
}
