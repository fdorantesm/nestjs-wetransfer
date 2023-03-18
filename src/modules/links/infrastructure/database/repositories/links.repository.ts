import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from 'src/modules/links/domain/interfaces/link';
import { LinkEntity } from 'src/modules/links/domain/entities/link.entity';
import { LinkModel } from '../models/link.model';

@Injectable()
export class LinksRepository {
  constructor(
    @InjectModel(LinkModel.name)
    private readonly linkModel: Model<LinkModel>,
  ) {}

  public async create(payload: Link): Promise<LinkEntity> {
    const url = await this.linkModel.create(payload);
    if (url) {
      return LinkEntity.create(url.toJSON());
    }
  }
}
