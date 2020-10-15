import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

url="http://localhost:3000/Resto"

  constructor(private http:HttpClient) { }

  getList()
  {
    return this.http.get(this.url)
  }

  saveResto(data)
  {
    return this.http.post(this.url,data)
  }

  deleteResto(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
