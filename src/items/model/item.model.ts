import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type itemDocument = HydratedDocument<item>;
@Schema()
export class item {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true })
  imageURL: string[];

  @Prop({ required: true })
  category: string;

  @Prop({
    type: Object,
    featureAndSpec: [String],
    safetyAndUsage: [String],
    sizeAndDimensions: String,
    color: String,
    material: String,
  })
  desc: {
    featureAndSpec: string[];
    safetyAndUsage: string[];
    sizeAndDimensions: string[];
    color: string;
    material: string;
  };

  @Prop({
    type: Object,
    minDuration: { type: String, required: true },
    maxDuration: { type: String, required: true },
  })
  tenureDuration: {
    minDuration: string;
    maxDuration: string;
  };

  @Prop({
    type: Object,
    time: { type: String, required: true },
    value: { type: Number, required: true },
  })
  cost: {
    time: string;
    value: number;
  };

  @Prop({ required: true, default: true })
  available: boolean;
}

export const itemSchema = SchemaFactory.createForClass(item);
