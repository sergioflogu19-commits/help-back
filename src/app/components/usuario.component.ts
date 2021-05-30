import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  public menu: any[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    let cust = {
      token: localStorage.getItem('token'),
      email: localStorage.getItem('usuario')
    }
    this.authService.recursoUsuario(cust).subscribe((resp: any) => {
      if (resp.respuesta){
        switch (resp.id_rol) {
          case 1:
            this.menu = this.authService.menuFuncionario;
            break;
          case 2:
            this.menu = this.authService.menuAgente;
            break;
          case 3:
            this.menu = this.authService.menuAdmin;
            break;
        }
      }
    });
  }



}
