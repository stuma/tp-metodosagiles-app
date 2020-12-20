import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';


@Component({
  selector: 'app-lista-licencias',
  templateUrl: './lista-licencias.component.html',
  styleUrls: ['./lista-licencias.component.css']
})
export class ListaLicenciasComponent implements OnInit {
  @ViewChild("licenciasGrid") licenciasGrid: DxDataGridComponent;

  popupVerLicenciasVencidas: boolean=false;
  gridLicenciasHeight: number;
  licenciasDataSource: any;
  listaLicenciasTitulo: string;

  ngOnInit() {
    this.gridLicenciasHeight = window.innerHeight - 180;
  }


  limpiarFiltros() {
    /*this.gridCompetencia.instance.clearFilter(); 
    this.gridCompetencia.instance.clearSorting();*/
  }

  seleccionaItemGrid($event) {
    if ($event.currentSelectedRowKeys.length > 0) {

    }
  }
  verLicenciasVencidas(){
    this.popupVerLicenciasVencidas = true;
    this.listaLicenciasTitulo = 'Lista licencias vencidas';
  }

  cerrarPopUpLicenciasVencidas(){
    this.popupVerLicenciasVencidas = false;
  }


}

