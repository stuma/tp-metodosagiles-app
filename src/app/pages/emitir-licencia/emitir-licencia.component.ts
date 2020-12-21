import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DataService, Licencia } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
  uploadPath: string;
  fotoId: any;
  titular: any;

  //dataSources
  tipoLicenciaDataSource: any = [];
  titularesDataSource: any = [];

  //servicios
  dataService: DataService;
  httpClient: any;
  headers: any;

  constructor(
    @Inject(HttpClient) httpClient: HttpClient,
    dataService: DataService,
    private router: Router
  ) {
    this.dataService = dataService;

    this.httpClient = httpClient;


    //url del endpoint donde se enviara la info para guardar la imagen
    this.uploadPath = environment.apiUrl + 'fotos';


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

  addFoto(event) {
    console.log("addFoto", event);
    
    // this.headers.append('Content-Type', 'multipart/form-data');
    // this.headers.append('Accept', 'application/json');
    // this.httpClient.post('http://agiles.local/save.php', {
    //   headers: this.headers
    // }).subscribe(data => {
    //   //Check success message
    //   console.log(data);
    // });

    this.titular.foto = JSON.parse(event.request.response);
    this.fotoId = this.titular.foto.id;
  }

}
