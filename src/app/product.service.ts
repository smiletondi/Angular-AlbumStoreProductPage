import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response: Response) => response.json());
  }

}