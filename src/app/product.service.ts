import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Album } from "./album";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response: Response) => <Album>response.json());
  }

}