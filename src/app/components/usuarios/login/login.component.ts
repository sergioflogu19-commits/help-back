import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SolicitudService} from '../../../services/solicitud.service';
import {UsuarioModel} from '../../../models/usuario.model';
import Swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public form: FormGroup;
  public usuario: UsuarioModel;

  constructor(
    private solicitudService: SolicitudService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.usuario = new  UsuarioModel();
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      Swal.fire(
        'Falta',
        'Tiene marcados los campos que faltan',
        'warning'
      );
      return;
    }
    Swal.fire({
      icon: 'info',
      title: 'Buscando...',
      text: 'Espere un momento por favor!',
    });
    Swal.showLoading();
    this.solicitudService.entrarUsuario(this.usuario).subscribe((resp: any) => {
      if (resp.respuesta){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        Toast.fire({
          icon: 'success',
          title: resp.mensaje
        });
        localStorage.setItem('usuario', this.usuario.email);
        localStorage.setItem('token', resp.token);
        setTimeout(() => {
          this.router.navigateByUrl('/solicitud');
        }, 3000);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: resp.mensaje
        })
      }
    });
  }
}
