import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Module } from 'nestjs-s3';

import { s3ConfigLoader } from 'src/core/infrastructure/config/loaders/s3.loader';
import { S3Service } from './infrastructure/storage/services/s3.service';
import { UploaderController } from './infrastructure/http/controllers/uploader.controller';
import { UploadImageUseCase } from './application/use-cases/upload-image/upload-image.service';
import { PathService } from './application/services/path.service';
import { UtilityModule } from '@app/utility';
import { MimeTypesService } from './application/services/mime-types.service';
import { S3Factory } from 'src/modules/uploader/application/factories/s3.factory';

@Module({
  imports: [
    S3Module.forRootAsync({
      imports: [ConfigModule.forFeature(s3ConfigLoader)],
      inject: [ConfigService],
      useClass: S3Factory,
    }),
    UtilityModule,
  ],
  providers: [S3Service, UploadImageUseCase, PathService, MimeTypesService],
  controllers: [UploaderController],
})
export class UploaderModule {}
