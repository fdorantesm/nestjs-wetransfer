import { Test, TestingModule } from '@nestjs/testing';

import { UploadImageUseCase } from './upload-image.service';

describe('UploadImageUseCase', () => {
  let service: UploadImageUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadImageUseCase],
    }).compile();

    service = module.get<UploadImageUseCase>(UploadImageUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
