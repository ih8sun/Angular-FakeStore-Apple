import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { iphone } from 'src/app/model/iphone';
import { iphoneModel } from 'src/app/model/iphoneModel';
import { IphoneService } from 'src/app/services/iphone.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent {

  parametros: any;
  iphones: iphoneModel[] = [];
  objIphone: iphone = new iphone();
  currentPage = 0;
  constructor(private route: ActivatedRoute, private servicio: IphoneService) { }


  ngOnInit(): void {

    this.route.queryParamMap.subscribe(
      (params) => { this.parametros = { ...params.keys, ...params } }
    );
    this.getiphones();
  }


  getiphones = () => {
    this.servicio.getIphones(this.currentPage, 15).subscribe((resp: any) => {
      this.iphones = resp;
    })
  }

  textoForm: string = "Insertar"
  insUpd: boolean = true;



  registrar = () => {

    this.objIphone.nombre = this.FormIphone.value.nombre;
    this.objIphone.precio = this.FormIphone.value.precio;
    this.objIphone.capacidad = this.FormIphone.value.capacidad;
    this.objIphone.color = this.FormIphone.value.color;
    this.objIphone.barcode = this.FormIphone.value.barcode;
    this.objIphone.descripcion = this.FormIphone.value.descripcion;
    this.objIphone.imagen = this.FormIphone.value.imagen;
    this.objIphone.stock = this.FormIphone.value.stock;

    if (this.insUpd) {

      this.servicio.postIphones(this.objIphone)
        .subscribe(resp => {
          this.FormIphone.reset();
          this.getiphones();
        })

    } else {
      this.servicio.putIphones(this.objIphone)
        .subscribe(resp => {
          this.FormIphone.reset();
          this.getiphones();
          this.textoForm = "Insertar";
          this.insUpd = true;
        })
    }

  }

  FormIphone = new FormGroup({
    nombre: new FormControl(),
    precio: new FormControl(),
    capacidad: new FormControl(),
    color: new FormControl(),
    barcode: new FormControl(),
    descripcion: new FormControl(),
    imagen: new FormControl(),
    stock: new FormControl(),
  })


  editar = (e: iphoneModel) => {

    this.objIphone.id = e.id;
    this.FormIphone.controls['nombre'].setValue(e.nombre);
    this.FormIphone.controls['precio'].setValue(e.precio);
    this.FormIphone.controls['capacidad'].setValue(e.capacidad);
    this.FormIphone.controls['color'].setValue(e.color);
    this.FormIphone.controls['barcode'].setValue(e.barcode);
    this.FormIphone.controls['descripcion'].setValue(e.descripcion);
    this.FormIphone.controls['imagen'].setValue(e.imagen);
    this.FormIphone.controls['stock'].setValue(e.stock);
    this.textoForm = "Actualizar";
    this.insUpd = false;
  }


  eliminar = (e: iphoneModel) => {
    let confirm = window.confirm('Seguro que deseas eliminar a ${e.nombre}');
    if (confirm) {
      this.servicio.deleteIphones(e.id)
        .subscribe(resp => {
          this.getiphones();
        })
    }
  }

  anterior() {

    if (this.currentPage != 0) {
      this.currentPage--;
      this.getiphones();
    }
  }
  siguiente() {

    this.currentPage++;
    this.getiphones();

  }
}
