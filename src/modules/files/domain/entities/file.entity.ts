import { File } from '../interfaces/file';

export class FileEntity {
  constructor(payload: File) {}

  static create(payload: File): FileEntity {
    return new FileEntity(payload);
  }
}
