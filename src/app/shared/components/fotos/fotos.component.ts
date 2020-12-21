import { Component, OnInit, NgModule, ViewChild, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DxSelectBoxModule, DxTemplateModule, DxBoxModule, DxSelectBoxComponent } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FotosService } from './fotos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-fotos',
    templateUrl: './fotos.component.html',
    styleUrls: ['./fotos.component.scss']
})

export class FotosComponent implements OnInit {
    @ViewChild(DxSelectBoxComponent) dxSelectBox: DxSelectBoxComponent;
    fotoId: any;
    imgPath: any;
    url: any;

    constructor(private router: Router, private fotoService: FotosService, private sanitizer: DomSanitizer) {
        this.imgPath = this.sanitizer.bypassSecurityTrustResourceUrl('');
        this.url = '';
    }

    get fotosDataSource(): string {
        return this.fotoId;
    }

    @Input()
    set fotosDataSource(fotoId: string) {
        this.fotoId = fotoId;
        if (this.fotoId != undefined && this.fotoId != null && this.fotoId != "") {
            this.fotoService.getFoto(this.fotoId).then((response) => {
                this.url = response;
                this.imgPath = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.url));
            });
        } else {
            this.imgPath = this.sanitizer.bypassSecurityTrustResourceUrl('');
            this.url = '';
        }
    }

    ngOnInit() {
    }
}

@NgModule({
    imports: [
        DxSelectBoxModule,
        CommonModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxBoxModule,
        HttpClientModule
    ],
    declarations: [FotosComponent],
    exports: [FotosComponent]
})

export class FotosModule { }
