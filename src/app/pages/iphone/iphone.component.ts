import { Component, OnInit } from '@angular/core';
import { iphoneModel } from 'src/app/model/iphoneModel';
import { iphone } from 'src/app/model/iphone';
import { IphoneService } from 'src/app/services/iphone.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  iphones: iphoneModel[] = []
  objIphone = new iphone();
  paginatedIphones: iphoneModel[] = [];
  currentPage = 0;
  totalPages: number = 0;
  itemsPerPage: number = 15;

  constructor(private servicio: IphoneService) {

  }

  ngOnInit(): void {
    this.getiPhone(this.currentPage, this.itemsPerPage);
  }



  getiPhone(page: number, size: number) {
    this.servicio.getIphones(page, size).subscribe((resp: any) => {
      console.log(resp);

      this.iphones = resp;
      this.currentPage = page;
      this.totalPages = resp.totalPages;
      this.paginatedIphones = this.iphones;

    });
  }

  anterior(actual: number) {
    if (actual - 1 >= 0) {
      this.currentPage = actual - 1;
      this.getiPhone(this.currentPage, this.itemsPerPage); 

    }
  }
  siguiente() {

    if(this.paginatedIphones.length != 15){
      return;
    }
    this.currentPage++;
    this.getiPhone(this.currentPage, this.itemsPerPage); 
  }
  
}
