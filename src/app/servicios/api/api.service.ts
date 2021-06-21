import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { 

  }

  cargarUsuarios (url:string ) {
  
    return this.HttpClient.get(url);

  }

}
