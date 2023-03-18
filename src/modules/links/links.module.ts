import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LinkModel } from './infrastructure/database/models/link.model';
import { LinkSchema } from './infrastructure/database/schemas/link.schema';
import { LinksRepository } from './infrastructure/database/repositories/links.repository';
import { LinksService } from './infrastructure/database/services/links.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LinkModel.name, schema: LinkSchema }]),
  ],
  providers: [LinksRepository, LinksService],
})
export class LinksModule {}
