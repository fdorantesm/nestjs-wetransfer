import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FileModel } from '../models/file.model';
import { FileEntity } from 'src/modules/files/domain/entities/file.entity';
import { File } from 'src/modules/files/domain/interfaces/file';

@Injectable()
export class FilesRepository {
  constructor(
    @InjectModel(FileModel.name)
    private readonly fileModel: Model<FileModel>,
  ) {}

  public async create(payload: File): Promise<FileEntity> {
    const url = await this.fileModel.create(payload);
    if (url) {
      return FileEntity.create(url.toJSON());
    }
  }
}
