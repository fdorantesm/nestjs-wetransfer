import { UtilityService } from '@app/utility';
import { getAlphaChars } from '@app/utility/utils/alpha-chars';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PathService {
  constructor(private readonly utilityService: UtilityService) {}

  public getExtension(filename: string): string {
    return filename.split('.').pop();
  }

  public addIdentifierName(filename: string): string {
    const charset = getAlphaChars().join('');
    const id = this.utilityService.randomString(8, charset);
    const extension = this.getExtension(filename);
    const originalname = filename.replace(`.${extension}`, '');
    return `${originalname}-${id}.${extension}`;
  }
}
