import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'files',
  timestamps: true,
  autoIndex: true,
})
export class FileModel extends Document {
  @Prop({ type: String, required: true })
  public name: string;

  @Prop({ type: String, required: true })
  public originalName: string;

  @Prop({ type: Number, required: true })
  public size: number;

  @Prop({ type: String, required: true })
  public url: string;
}
