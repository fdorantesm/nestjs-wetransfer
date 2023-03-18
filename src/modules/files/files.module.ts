import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FilesRepository } from './infrastructure/database/repositories/files.repository';
import { FileModel } from './infrastructure/database/models/file.model';
import { FileSchema } from './infrastructure/database/schemas/file.schema';
import { FilesService } from './infrastructure/database/services/files.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FileModel.name, schema: FileSchema }]),
  ],
  providers: [FilesRepository, FilesService],
})
export class FilesModule {}
