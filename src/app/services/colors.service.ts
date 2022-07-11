import { Injectable } from '@angular/core';

import { Color } from '../interface/Color';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private apiUrl = 'http://localhost:3000/cores';

  constructor( private http:HttpClient) { }

  getAll(): Observable<Color[]> {
    return this.http.get<Color[]>(this.apiUrl)
  }
}
