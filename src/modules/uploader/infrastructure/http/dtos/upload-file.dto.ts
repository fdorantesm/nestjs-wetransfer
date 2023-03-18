import { ApiProperty } from '@nestjs/swagger';

import { File } from '@app/common/types/general/file.type';

export class UploadFileDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  public file: File;
}
