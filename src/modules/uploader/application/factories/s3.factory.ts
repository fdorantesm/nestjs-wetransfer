import { S3ModuleOptionsFactory } from 'nestjs-s3/dist/s3.interfaces.d';
import { S3ModuleOptions } from 'nestjs-s3/dist/s3.interfaces.d';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Configuration } from '@app/common/types/storage/s3.type';
import { Environments } from '@app/common/types/environment/environment.enum';

@Injectable()
export class S3Factory implements S3ModuleOptionsFactory {
  private params: S3Configuration;
  private environment: string;
  constructor(private readonly configService: ConfigService) {
    this.params = configService.get<S3Configuration>('s3');
    this.environment = configService.get<string>('environment.nodeEnv');
  }
  createS3ModuleOptions(): S3ModuleOptions | Promise<S3ModuleOptions> {
    const s3Params: S3ModuleOptions = {
      config: {
        signatureVersion: 'v4',
        s3ForcePathStyle: true,
        credentials: {
          accessKeyId: this.params.accessKey,
          secretAccessKey: this.params.secretAccessKey,
        },
      },
    };

    if (this.environment === Environments.DEVELOPMENT) {
      s3Params.config.endpoint = this.params.endpoint;
    }

    return s3Params;
  }
}
