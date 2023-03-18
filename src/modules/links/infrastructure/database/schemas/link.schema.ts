import { SchemaFactory } from '@nestjs/mongoose';
import { LinkModel } from '../models/link.model';

export const LinkSchema = SchemaFactory.createForClass(LinkModel);
