import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DataService, Titular } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-alta-titular',
  templateUrl: './alta-titular.component.html',
  styleUrls: ['./alta-titular.component.css']
})
export class AltaTitularComponent implements OnInit {
  //widgets de la vista
  @ViewChild(DxFormComponent) formTitular: DxFormComponent;

  //variables de la vista
  titular: Titular;
  
  //services
  dataService: DataService;

  constructor(dataService: DataService) { 
    this.dataService = dataService;
  }

  ngOnInit() {
    this.titular = this.dataService.getTitular();
  }

  guardarTitular() {
    console.log(this.titular);
  }

}
