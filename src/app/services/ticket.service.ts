import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url: string = 'http://localhost/help-back/public/api/agente';
  constructor(
    private http: HttpClient
  ) { }

  public listado(){
    return this.http.post(`${this.url}/tickets`, null);
  }
}
