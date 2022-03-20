import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataList } from './dataList';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  url:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getDataDetails():Observable<IDataList[]>{
    return this.http.get<IDataList[]>(this.url);
  }
}
