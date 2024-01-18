import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<user>;
@Schema()
export class Address {
  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  zip: number;

  @Prop({ required: true })
  area: string;
}

@Schema()
export class CartItem {
  @Prop()
  itemID: string;

  @Prop()
  tenureDuration: number;

  @Prop()
  tenurePrice: number;
}

@Schema()
export class user {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ type: [Address], required: true })
  address: Address[];

  @Prop({ default: Date.now, required: true })
  joinedDate: Date;

  @Prop({ required: true, default: false })
  verified: boolean;

  @Prop({ type: [String] })
  postedItems: string[];

  @Prop({ type: [CartItem] })
  cartItems: CartItem[];
}

export const userSchema = SchemaFactory.createForClass(user);
