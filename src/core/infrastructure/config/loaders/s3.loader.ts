import { registerAs } from '@nestjs/config';
import { S3Configuration } from '@app/common/types/storage/s3.type';

export const s3ConfigLoader = registerAs(
  's3',
  (): S3Configuration => ({
    endpoint: process.env.S3_ENDPOINT,
    accessKey: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    bucket: process.env.S3_BUCKET,
  }),
);
