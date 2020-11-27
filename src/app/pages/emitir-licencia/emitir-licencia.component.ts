import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DataService, Licencia } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

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

  constructor(
    dataService: DataService,
    private router: Router
  ) {
    this.dataService = dataService;
    this.tipoLicenciaChanged = this.tipoLicenciaChanged.bind(this);
    this.titularChanged = this.titularChanged.bind(this);
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
    this.router.navigate(['/pages/alta-titular']);
  }

  imprimirLicencia() {
    console.log('imprimir licencia');
  }

  emitirLicencia() {
    console.log('emitir licencia');
  }

}
