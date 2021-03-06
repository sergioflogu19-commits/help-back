import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AppComponent } from './app.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { NavBarComponent } from './partials/nav-bar/nav-bar.component';
import { MenuComponent } from './partials/menu/menu.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { RegistroComponent } from './components/usuarios/registro/registro.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { UsuarioComponent } from './components/usuario.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import {IndexComponent} from './components/usuarios/index/index.component';

import { CalificacionPipe } from './pipes/calificacion.pipe';
import { RolPipe } from './pipes/rol.pipe';
import { CargoPipe } from './pipes/cargo.pipe';
import { DivisionPipe } from './pipes/division.pipe';
import { EstadoPipe } from './pipes/estado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    NavBarComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    NopagefoundComponent,
    UsuarioComponent,
    TicketComponent,
    HomeComponent,
    SolicitudesComponent,
    CalificacionPipe,
    IndexComponent,
    RolPipe,
    CargoPipe,
    DivisionPipe,
    EstadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
    NgbModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
