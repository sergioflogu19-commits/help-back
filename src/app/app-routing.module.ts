import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SolicitudComponent} from './components/solicitud/solicitud.component';
import {RegistroComponent} from './components/usuarios/registro/registro.component';
import {LoginComponent} from './components/usuarios/login/login.component';
import {NopagefoundComponent} from './components/nopagefound/nopagefound.component';
import {UsuarioComponent} from './components/usuarios/usuario.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '',
    component: UsuarioComponent,
    children: [
      { path: 'solicitud', component: SolicitudComponent,  },
      { path: 'registro', component: RegistroComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
