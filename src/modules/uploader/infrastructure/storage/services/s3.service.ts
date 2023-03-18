import { PutObjectRequest } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { InjectS3, S3 } from 'nestjs-s3';

@Injectable()
export class S3Service {
  constructor(
    @InjectS3()
    private readonly s3: S3,
  ) {}

  public async headObject(bucket: string, key: string) {
    const file = await this.s3
      .headObject({
        Bucket: bucket,
        Key: key,
      })
      .promise();

    return {
      contentLength: file.ContentLength,
      contentType: file.ContentType,
      contentEncoding: file.ContentEncoding,
    };
  }

  public async upload(
    path: string,
    file: Buffer,
    bucket?: string,
    options?: Partial<PutObjectRequest>,
  ): Promise<string> {
    const object = await this.s3
      .upload({
        Key: path,
        Bucket: bucket,
        Body: file,
        ...options,
      })
      .promise();
    return object.Location;
  }

  public async getSignedUrl(key: string, bucket: string): Promise<string> {
    const signedUrl = await this.s3.getSignedUrl('getObject', {
      Key: key,
      Bucket: bucket,
      Expires: 3600,
    });

    return signedUrl;
  }

  public async deleteObject(bucket: string, key: string): Promise<boolean> {
    const q = await this.s3
      .deleteObject({
        Key: key,
        Bucket: bucket,
      })
      .promise();

    return true;
  }
}
