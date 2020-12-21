import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class FotosService {

    constructor(private http: HttpClient, private router: Router) {
    }

    getFoto(foto: string) {
        /*return this.http.get(environment.apiUrl + 'fotos/' + foto + '/archivo', { responseType: 'blob' })
            .toPromise()
            .then((foto: Blob) => {
                return foto;
            })
            .catch(error => { throw 'Data Loading Error' });*/

            console.log("llamada al backend para retornar imagen desde db");
        return null;
    }
}