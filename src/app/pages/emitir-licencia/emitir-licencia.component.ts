import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DataService, Licencia } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-emitir-licencia',
  templateUrl: './emitir-licencia.component.html',
  styleUrls: ['./emitir-licencia.component.css']
})
export class EmitirLicenciaComponent implements OnInit {
  //widgets de la vista
  @ViewChild(DxFormComponent) formLicencia: DxFormComponent;

  //variables de la vista
  licencia: Licencia;

  //dataSources
  tipoLicenciaDataSource: any = [];
  titularesDataSource: any = [];

  //servicios
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.tipoLicenciaChanged = this.tipoLicenciaChanged.bind(this);

  }

  ngOnInit() {
    this.licencia = this.dataService.getLicencia();
    this.tipoLicenciaDataSource = this.dataService.getTipoLicencias();
  }

  tipoLicenciaChanged($event) {
    console.log($event);
  }

  titularChanged($event) {
    console.log($event);
  }

  altaTitular() {
    console.log('alta titular');
  }

  imprimirLicencia() {
    console.log('imprimir licencia');
  }

  emitirLicencia() {
    console.log('emitir licencia');
  }

}
