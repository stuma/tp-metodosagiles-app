import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { NotAuthorizedContainerModule } from './not-authorized-container';
import { AppRoutingModule } from './app-routing.module';
import { DxBoxModule, DxButtonModule, DxCheckBoxModule, DxFormModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaTitularComponent
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
    DxValidatorModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxCheckBoxModule,
    DxBoxModule,
    HttpClientModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
