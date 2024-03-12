import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'https://mp32447456c53989e820.free.beeceptor.com/products'

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=> res);
  }
}
