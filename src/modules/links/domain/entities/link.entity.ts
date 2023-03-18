import { Link } from '../interfaces/link';

export class LinkEntity {
  constructor(payload: Link) {}

  static create(payload: Link): LinkEntity {
    return new LinkEntity(payload);
  }
}
