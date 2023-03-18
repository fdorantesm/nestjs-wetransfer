import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'links',
  timestamps: true,
  autoIndex: true,
})
export class LinkModel extends Document {
  @Prop({ required: true })
  public url: string;

  @Prop({ required: true })
  public user: string;

  @Prop({ required: true })
  public password: string;

  @Prop({ default: Date.now, expires: 60 * 60 * 1000 * 24 * 7 })
  public expiresAt: Date;
}
