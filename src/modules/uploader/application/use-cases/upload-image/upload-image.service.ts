import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { File } from '@app/common/types/general/file.type';
import { UseCase } from 'libs/domain/src';
import { S3Service } from 'src/modules/uploader/infrastructure/storage/services/s3.service';
import { PathService } from '../../services/path.service';
import { UtilityService } from '@app/utility';
import { MimeTypesService } from '../../services/mime-types.service';

@Injectable()
export class UploadImageUseCase implements UseCase {
  constructor(
    private readonly s3Service: S3Service,
    private readonly configService: ConfigService,
    private readonly pathService: PathService,
    private readonly mimeTypeService: MimeTypesService,
  ) {}

  public run(file: File, userId: string): Promise<string> {
    const bucket = this.configService.get<string>('s3.bucket');
    const key = this.pathService.addIdentifierName(file.originalname);
    return this.s3Service.upload(`${userId}/${key}`, file.buffer, bucket, {
      ContentDisposition: 'inline',
      ContentType: this.mimeTypeService.lookup(file.originalname),
    });
  }
}
