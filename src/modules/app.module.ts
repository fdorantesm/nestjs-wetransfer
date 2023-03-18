import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import { CoreModule } from 'src/core/core.module';
import { DatabaseModule } from 'src/database/database.module';
import { FilesModule } from './files/files.module';
import { UploaderModule } from './uploader/uploader.module';

@Module({
  imports: [
    DatabaseModule,
    CoreModule,
    LinksModule,
    FilesModule,
    UploaderModule,
  ],
})
export class AppModule {}
