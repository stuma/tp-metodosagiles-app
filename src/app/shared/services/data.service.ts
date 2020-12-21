import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class TipoLicencia {
    id: number;
    nombre: string;
}

export class Titular {
    id: number;
    dni: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    direccion: string;
    donante: boolean;
    factorRh: string;
}

export class Licencia {
    id: number;
    tipo: TipoLicencia;
    fechaEmision: string;
    fechaVencimiento: string;
    titular: Titular;
    observaciones: string;
    numeroCopias: number;
    pendiente: boolean;
}


@Injectable()
export class DataService {

    httpClient: any;

    constructor(@Inject(HttpClient) httpClient: HttpClient) {
        this.httpClient = httpClient;
    }


    getTipoLicencias() {
        let TipoLicencias = [
            { id: 1, nombre: 'Clase A' },
            { id: 2, nombre: 'Clase B' },
            { id: 3, nombre: 'Clase C' },
            { id: 4, nombre: 'Clase D' },
            { id: 5, nombre: 'Clase E' },
            { id: 6, nombre: 'Clase F' },
            { id: 7, nombre: 'Clase G' }
        ]
        return TipoLicencias;
    }

    getTitulares() {
        return [];
    }

    getTitular() {
        let titular: Titular = {
            "id": null,
            "dni": null,
            "nombre": '',
            "apellido": '',
            "fechaNacimiento": null,
            "direccion": '',
            "donante": true,
            "factorRh": ''
        }
        return titular;
    }

    getLicencia() {
        let licencia: Licencia = {
            "id": null,
            "tipo": null,
            "fechaEmision": null,
            "fechaVencimiento": null,
            "titular": null,
            "observaciones": '',
            "numeroCopias": null,
            "pendiente": true,
        }
        return licencia;
    }
    getLicencias() {
        let licenciasDataSource = [
            {
                "id": 1,
                "tipo": { id: 1, nombre: 'Clase A' },
                "fechaEmision": "7 / 5 / 2019",
                "fechaVencimiento": "5 / 7 / 2025",
                "titular": {
                    "id": 1,
                    "dni": 40310662,
                    "nombre": "Pedro",
                    "apellido": "Romero",
                    "fechaNacimiento": "7 / 5 / 1998",
                    "direccion": "Bv.Galvez 2030",
                    "donante": true, factorRh: "A+"
                },
                "observaciones": "Debe conducir con lentes",
                "numeroCopias": 2,
                "pendiente": false
            },
            {
                "id": 1,
                "tipo": { id: 2, nombre: 'Clase B' },
                "fechaEmision": "4 / 3 / 2018",
                "fechaVencimiento": "6 / 8 / 2024",
                "titular": {
                    "id": 2,
                    "dni": 40310771,
                    "nombre": "Sebastian",
                    "apellido": "Tuma",
                    "fechaNacimiento": "15 / 5 / 1980",
                    "direccion": "Monseñor Zaspe 3660",
                    "donante": true, factorRh: "A-"
                },
                "observaciones": "Debe conducir con lentes",
                "numeroCopias": 5,
                "pendiente": false
            }
        ]; 
        return licenciasDataSource;
    }
    getLicenciasVencidas() {
        let licenciasVencidasDataSource = [
            {
                "id": 3,
                "tipo": { id: 3, nombre: 'Clase C' },
                "fechaEmision": "8 / 9 / 2014",
                "fechaVencimiento": "8 / 9 / 2019",
                "titular": {
                    "id": 3,
                    "dni": 40300762,
                    "nombre": "Nicolas",
                    "apellido": "Greppi",
                    "fechaNacimiento": "20 / 5 / 1996",
                    "direccion": "Alvear 2300",
                    "donante": true, factorRh: "A+"
                },
                "observaciones": "",
                "numeroCopias": 3,
                "pendiente": false
            },
            {
                "id": 4,
                "tipo": { id: 1, nombre: 'Clase A' },
                "fechaEmision": "3 / 9 / 2016",
                "fechaVencimiento": "3 / 9 / 2020",
                "titular": {
                    "id": 4,
                    "dni": 40300521,
                    "nombre": "Francisco",
                    "apellido": "Gautero",
                    "fechaNacimiento": "22 / 5 / 1996",
                    "direccion": "Las heras 1200",
                    "donante": true, factorRh: "B-"
                },
                "observaciones": "",
                "numeroCopias": 4,
                "pendiente": false
            },
            {
                "id": 4,
                "tipo": { id: 1, nombre: 'Clase A' },
                "fechaEmision": "1 / 02 / 2017",
                "fechaVencimiento": "1 / 09 / 2021",
                "titular": {
                    "id": 4,
                    "dni": 39400521,
                    "nombre": "Juan",
                    "apellido": "Gallino",
                    "fechaNacimiento": "29 / 6 / 1995",
                    "direccion": "Ituizango",
                    "donante": true, factorRh: "A-"
                },
                "observaciones": "",
                "numeroCopias": 4,
                "pendiente": false
            }
        ]; 
        return licenciasVencidasDataSource;
    }

}

