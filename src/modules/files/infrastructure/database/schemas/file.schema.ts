import { SchemaFactory } from '@nestjs/mongoose';
import { FileModel } from '../models/file.model';

export const FileSchema = SchemaFactory.createForClass(FileModel);
