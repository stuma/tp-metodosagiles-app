import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';
import { EmitirLicenciaComponent } from './pages/emitir-licencia/emitir-licencia.component';
import { ListaLicenciasComponent } from './pages/lista-licencias/lista-licencias.component';
import { RenovarLicenciaComponent } from './pages/renovar-licencia/renovar-licencia.component';


const routes: Routes = [
  {
    path: 'pages/renovar-licencia',
    component: RenovarLicenciaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/lista-licencias',
    component: ListaLicenciasComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emitir-licencia',
    component: EmitirLicenciaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/alta-titular',
    component: AltaTitularComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent]
})
export class AppRoutingModule { }
