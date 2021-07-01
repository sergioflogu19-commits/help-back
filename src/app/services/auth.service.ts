import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost/help-back/public/api';

  public menuFuncionario = [
    { url: '/home', titulo: 'Home'},
    { url: '/solicitud', titulo: 'Solicitud' },
    { url: '/solicitudes', titulo: 'Solicitudes' },
  ];
  public menuAgente = [
    { url: '/home', titulo: 'Home' },
    { url: '/ticket', titulo: 'Ticket' }
  ];
  public menuAdmin = [
    { url: '/home', titulo: 'Home' },
    { url: '/solicitud', titulo: 'Solicitud' },
    { url: '/ticket', titulo: 'Ticket' },
    { url: '/registro', titulo: 'Registro' },
    { url: '/listado', titulo: 'Lista' },
  ];

  constructor(
    private http: HttpClient
  ) { }


  public guardarUsuario(cust: any): Observable<any>{
    return this.http.post(this.url + '/registro', cust);
  }

  public entrarUsuario(cust: any): Observable<any>{
    return this.http.post(this.url + '/login', cust);
  }

  public recursoUsuario(cust: any): Observable<any>{
    return this.http.post(this.url + '/recurso_usuario', cust);
  }

  public index(cust){
    return this.http.post(this.url + '/admin/index', cust);
  }
  public store(id: number, usuario: UsuarioModel){
    return this.http.put(this.url + '/admin/store/' + id, usuario);
  }
  public eliminar(usuario: UsuarioModel){
    return this.http.post(this.url + '/admin/eliminar', usuario);
  }

  public listarAgente(){
    return this.http.get(this.url + '/agente/listado');
  }

}
