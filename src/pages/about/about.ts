import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

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
     dato: "KIWQ328734BSKDBAS87",
     icono: "logo-bitcoin"
   },

   {
     titulo: "Hobby",
     dato: "Aprender cosas nuevas y salir",
     icono: "alarm"
   }
 ];


  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.agregarDato("Mascota", "perro", "heart");
    this.agregarDato("Lugar Fav", "Orilla del mar", "heart" );
    this.agregarDato("Curso Fav", "Física", "heart");
    this.agregarDato("Fecha de nacimiento", "18/02/01", "heart");
    this.agregarDato("BFF", "Ibeth", "heart");


  }
  agregarDato(nuevoTitulo: string,nuevoDato: string, nuevoIcono:string) {
    if (nuevoTitulo !== "" && nuevoDato !== ""){
      this.informacion.push({
        titulo: nuevoTitulo,
        dato: nuevoDato,
        icono: nuevoIcono
      });
    }
  }

}
