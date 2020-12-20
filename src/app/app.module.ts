import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { NotAuthorizedContainerModule } from './not-authorized-container';
import { AppRoutingModule } from './app-routing.module';
import { DxBoxModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';
import { DataService } from './shared/services/data.service';
import { EmitirLicenciaComponent } from './pages/emitir-licencia/emitir-licencia.component';
import { ListaLicenciasComponent } from './pages/lista-licencias/lista-licencias.component';
import { RenovarLicenciaComponent } from './pages/renovar-licencia/renovar-licencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaTitularComponent,
    EmitirLicenciaComponent,
    ListaLicenciasComponent,
    RenovarLicenciaComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    NotAuthorizedContainerModule,
    AppRoutingModule,
    DxButtonModule,
    DxFormModule,
    DxPopupModule,
    DxDataGridModule,
    DxValidatorModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxCheckBoxModule,
    DxBoxModule,
    HttpClientModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
