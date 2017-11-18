import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nombre: string = "Grace Nikole";
  nickname: string = "Misty Blunch";
  edad: number = 16;


  datos: any = {
    nombre: "Grace Nikole",
    nickname: "Misty Blunch",
    edad: 16
  };

  origen: any ={
    titulo: "Origen",
    dato: "Lima, Peru"
  };

  email: any ={
    titulo: "E-mail",
    dato: "gracenikole@hotmailcom"
  };

  phone: any ={
    titulo: "Phone",
    dato: 959851104
  };

  btc: any ={
    titulo: "BTC address",
    dato: "sSDI993nldioHIOW53hf"
  };

  constructor(public navCtrl: NavController) {

  }

}
