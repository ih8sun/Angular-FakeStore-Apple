import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  navegar : string = '';

  constructor(private router: Router) {

  }
  
  headers : any[] = [
    {nombre: "iPhone 14 Pro.", descripcion: "!Super DCTO + Envio Gratis", url: "https://acortar.link/17hwJP"},
    {nombre: "WATCH.", descripcion: "!Mes del Padre!", url: "https://acortar.link/tSi4uf"},
    {nombre: "iPad 9a Gen.", descripcion: "!Macweek! Desde S/.1599", url: "https://acortar.link/snofpR"},
    {nombre: "iPhone 11.", descripcion: "Hasta S/300.De Descuento", url: "https://acortar.link/17hwJP"}
  ]

  products: any[] = [
    {nombre:"Mac",descripcion:"NUEVO",url:"https://acortar.link/LxYDSU"},
    {nombre:"iPad",descripcion:"MACWEEK EN IPAD 9TH",url:"https://acortar.link/u4dmFJ"},
    {nombre:"iPhone",descripcion:"!AL MEJOR PRECIO",url:"https://acortar.link/kCuQ9x"},
    {nombre:"WATCH",descripcion:"DESCUENTO ESPECIAL",url:"https://acortar.link/edede"},
    {nombre:"Musica",descripcion:"SIEMPRE ACTIVO",url:"https://cdn.shopify.com/s/files/1/0632/7880/9324/files/airpods_pro__550x_550x_41502acc-f866-4157-94a2-9e971be6c173_550x_1_550x.webp?v=1663964558"},
    {nombre:"Tv",descripcion:"NUEVO",url:"https://cdn.shopify.com/s/files/1/0632/7880/9324/files/Captura_de_Pantalla_2022-08-10_a_la_s_7.21.10_p.m._1_550x.webp?v=1663964586"},
    {nombre:"accesorio",descripcion:"LLEVALO!",url:"https://cdn.shopify.com/s/files/1/0632/7880/9324/files/hpiphone_550x_9d570309-03a2-4d24-835f-612a9a8c8c1b_550x.webp?v=1678743420"},
    {nombre:"AirTag",descripcion:"NO MAS PERDIDAS",url:"https://acortar.link/eRtzzU"},
  ]

  analizar(page: string){

    const ruta = page.toLowerCase();

    this.router.navigate([ruta])
  }
}
