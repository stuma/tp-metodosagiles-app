import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-titular',
  templateUrl: './alta-titular.component.html',
  styleUrls: ['./alta-titular.component.css']
})
export class AltaTitularComponent implements OnInit {
  titular:any;
  constructor() { }

  ngOnInit() {
    this.titular={
      nombre:"",
      apellido:"",
      fechaNacimiento:null,
      dni:"",
      direccion:"",
      factor_rh:"",
      donante:true,

    }
  }

  guardarTitular(){
    console.log(this.titular);
  }

}
