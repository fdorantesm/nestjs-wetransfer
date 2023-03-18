import { Injectable } from '@nestjs/common';

import { LinkEntity } from 'src/modules/links/domain/entities/link.entity';
import { FilesRepository } from '../repositories/files.repository';
import { File } from 'src/modules/files/domain/interfaces/file';

@Injectable()
export class FilesService {
  constructor(private readonly filesRepository: FilesRepository) {}

  public async create(payload: File): Promise<LinkEntity> {
    return this.filesRepository.create(payload);
  }
}
