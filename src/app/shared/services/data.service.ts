import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class TipoLicencia {
    id: number;
    valor: string;
}

export class Titular {
    id: number;
    dni: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    direccion: string;
    donante: boolean;
    factorRh: string;
}

export class Licencia {
    id: number;
    tipo: TipoLicencia;
    fechaEmision: Date;
    fechaVencimiento: Date;
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
        let tipoLicencias = [
            { id: 1, nombre: 'Clase A' },
            { id: 2, nombre: 'Clase B' },
            { id: 3, nombre: 'Clase C' },
            { id: 4, nombre: 'Clase D' },
            { id: 5, nombre: 'Clase E' },
            { id: 6, nombre: 'Clase F' },
            { id: 7, nombre: 'Clase G' }
        ]
        return tipoLicencias;
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
            "pendiente": true
        }
        return licencia;
    }

    
}
