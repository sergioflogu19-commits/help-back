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

  public elegir(cust: any){
    return this.http.post(`${this.url}/elegir_ticket`, cust);
  }

  public tomar(cust: any){
    return this.http.post(`${this.url}/tomar_ticket`, cust);
  }

  public terminar(cust: any){
    return this.http.post(`${this.url}/terminar_ticket`, cust);
  }
}
