import { Injectable } from '@nestjs/common';
import { randomString } from 'utility';

@Injectable()
export class UtilityService {
  public randomString(length: number, charSet: string): string {
    return randomString(length, charSet);
  }
}
