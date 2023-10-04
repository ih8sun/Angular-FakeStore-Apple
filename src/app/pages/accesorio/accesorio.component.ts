import { Component } from '@angular/core';
import { accesorio } from 'src/app/model/accesorio';
import { accesorioModel } from 'src/app/model/accesorioModel';
import { AccesorioService } from 'src/app/services/accesorio.service';

@Component({
  selector: 'app-accesorio',
  templateUrl: './accesorio.component.html',
  styleUrls: ['./accesorio.component.css']
})
export class AccesorioComponent {

  accesorios: accesorioModel[] = []
  objAccesorio = new accesorio();
  paginatedAccesorios: accesorioModel[] = [];
  currentPage = 0;
  totalPages: number = 0;
  itemsPerPage: number = 15;


  constructor(private servicio: AccesorioService) {

  }

  ngOnInit(): void {
    this.getAccesorio(this.currentPage, this.itemsPerPage);
  }

  getAccesorio(page: number, size: number) {
    this.servicio.getAccesorios(page, size).subscribe((resp: any) => {
      console.log(resp);
      this.accesorios = resp;
      this.currentPage = page;
      this.totalPages = resp.totalPages;
      this.paginatedAccesorios = this.accesorios;

    });
  }


  anterior(actual: number) {
    if (actual - 1 >= 0) {
      this.currentPage = actual - 1;
      this.getAccesorio(this.currentPage, this.itemsPerPage);

    }
  }
  siguiente() {

    if (this.paginatedAccesorios.length != 15) {
      return;
    }
    this.currentPage++;
    this.getAccesorio(this.currentPage, this.itemsPerPage);
  }

}
