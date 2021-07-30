import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Solicitud} from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private url: string = 'http://localhost/help-back/public/api';

  constructor(
    private http: HttpClient
  ) { }

  public categorias(): Observable<any>{
    return this.http.get(this.url + '/parametros/categoria');
  }

  public requerimientos (id: number): Observable<any>{
    return this.http.get(this.url + '/parametros/tipo_requerimiento/' + id);
  }

  public municipios (): Observable<any>{
    return this.http.get(this.url + '/parametros/municipio');
  }

  public sucursales (id: number): Observable<any>{
    return this.http.get(this.url + '/parametros/sucursal/' + id);
  }

  public departamentos (): Observable<any>{
    return this.http.get(this.url + '/parametros/departamento');
  }

  public divisiones (): Observable<any>{
    return this.http.get(this.url + '/parametros/division');
  }

  public cargos (): Observable<any>{
    return this.http.get(this.url + '/parametros/cargo');
  }

  public roles (): Observable<any>{
    return this.http.get(this.url + '/parametros/rol');
  }

  public guardarSolicitud(cust: Solicitud): Observable<any>{
    let json = JSON.stringify(cust.archivo);
    console.log(cust);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.url + '/funcionario/solicitar_req', cust, {headers});
  }

  public editarSolicitud(cust: any): Observable<any>{
    return this.http.post(this.url + '/funcionario/editar_req', cust);
  }



  public detalleRequerimiento (idRequerimiento: number): Observable<any>{
    return this.http.get(this.url + '/agente/ticket/' + idRequerimiento);
  }


}
