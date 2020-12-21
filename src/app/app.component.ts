import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { DataService, Licencia } from './shared/services/data.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
  //licenciaDataSource: Licencia[];
  //licenciasVencidasDataSource: Licencia[];
  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {
    //this.licenciaDataSource = DataService.getLicencias();
    //this.licenciasVencidasDataSource = DataService.getLicenciasVencidas();
   }


  isAutorized() {
    return this.authService.loggedIn;
  }
}
