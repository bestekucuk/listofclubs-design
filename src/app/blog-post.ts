import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

export class BlogPost {
  static typelist(typelist: any) {
    throw new Error('Method not implemented.');
  }
  static follow: any;
  constructor(
    public title: string,
    public imageUrl: string,
    public follow: boolean,
    public followbutton: boolean,
    public id: number,
    public typelist: typeList
  ) {}
}

enum typeList {
  vertical = 0,
  horizontal,
}
