import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

import { File } from '@app/common/types/general/file.type';
import { UploadImageUseCase } from 'src/modules/uploader/application/use-cases/upload-image/upload-image.service';
import { UploadFileDto } from '../dtos/upload-file.dto';
import { UserRequest } from '@app/common/types/http/user-request.type';

@ApiTags('Uploader')
@Controller({ version: '1', path: '/uploader' })
export class UploaderController {
  constructor(private readonly uploadImageUseCase: UploadImageUseCase) {}

  @Post('/')
  @ApiBody({ type: UploadFileDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  public upload(@UploadedFile() file: File, @Req() req: UserRequest) {
    return this.uploadImageUseCase.run(file, req?.user?.id || 'anon');
  }
}
