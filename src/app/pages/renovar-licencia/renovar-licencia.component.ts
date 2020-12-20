import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.gridLicenciasHeight = window.innerHeight - 180;
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
