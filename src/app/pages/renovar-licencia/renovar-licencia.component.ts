import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-renovar-licencia',
  templateUrl: './renovar-licencia.component.html',
  styleUrls: ['./renovar-licencia.component.css']
})
export class RenovarLicenciaComponent implements OnInit {

  gridLicenciasHeight: number;
  licenciasDataSource: any;
  listaLicenciasTitulo: string;
  popupRenovarLicencia: boolean=false;
  licenciasVencidasDataSource: any;

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    this.gridLicenciasHeight = window.innerHeight - 180;
    this.licenciasDataSource = this.dataService.getLicencias();
  }

  seleccionaItemGrid($event) {
    if ($event.currentSelectedRowKeys.length > 0) {

    }
  }
  renovarLicencia(){
    console.log("licenciarenovadapa");
    this.popupRenovarLicencia = true;
  }

}
