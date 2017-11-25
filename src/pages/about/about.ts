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

  datos2:any = {
      origen:"Origen",
      email: "E-mail",
      phone:"Phone",
      bitcoin: "BTC address",

      pais: "Lima, Peru",
      myemail:"gracenikole@hotmailcom",
      numerotelef: 959851104,
      btcaddress: "sSDI993nldioHIOW53hf"
    };


  datos: any = {
    nombre: "Grace Nikole",
    nickname: "Misty Blunch",
    edad: 16
  };

 informacion: any[] = [
   {
     titulo: "Origen",
     dato: "Lima, Peru",
     icono: "flag"
   },

   {
     titulo: "E-mail",
     dato: "gracenikole@hotmailcom",
     icono: "mail"
   },

   {
     titulo: "Phone",
     dato: 959851104,
     icono: "call"
   },

   {
     titulo: "BTC address",
     dato: "sSDI993nldioHIOW53hf",
     icono: "logo-bitcoin"
   }
 ];


  constructor(public navCtrl: NavController) {

  }

}
