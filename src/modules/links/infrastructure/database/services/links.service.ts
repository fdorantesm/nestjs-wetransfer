import { Injectable } from '@nestjs/common';

import { LinksRepository } from '../repositories/links.repository';
import { LinkEntity } from 'src/modules/links/domain/entities/link.entity';
import { Link } from 'src/modules/links/domain/interfaces/link';

@Injectable()
export class LinksService {
  constructor(private readonly linksRepository: LinksRepository) {}

  public async create(payload: Link): Promise<LinkEntity> {
    return this.linksRepository.create(payload);
  }
}
