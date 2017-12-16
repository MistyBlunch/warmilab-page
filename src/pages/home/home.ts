import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable }        from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quehaceres: Todo[] = [
    {
      description: "Lavar los platos",
      done: false
    },

    {
      description: "Pasear a mi perro",
      done: true
    },

    {
      description: "Salir a  comprar",
      done: false
    },

    {
      description: "Hacer tarea de Física",
      done: true
    }
  ];

  botones:any [] = [
  {
    color: "secondary",
    grande: false,
    texto: "Terminados"
  },

  {
    color: "danger",
    grande: false,
    texto: "Pendientes"
  },

  {
    color: "dark",
    grande: true,
    texto: "Todos"
  }
];


  filtro: string = "todos";

  constructor(
    public navCtrl: NavController,
    private todoService: TodoService) {}

  ngOnInit() {
    // codigo al iniciar el componente
    this.agregarQuehacer("comer", true);
    this.agregarQuehacer("pasear", false);
    this.agregarQuehacer("armar un cubo Rubik", false);
  }

  listarQuehaceres(){
    if (this.filtro == "Terminados"){
      return this.quehaceres.filter(quehacer => quehacer.done);
    }else if(this.filtro == "Pendientes"){
      return this.quehaceres.filter(quehacer => !quehacer.done);
    }else{
      return this.quehaceres;
    }
  }

  agregarQuehacer(nuevoQuehacer: string, terminado: boolean) {
    if (nuevoQuehacer !== "") {
      this.quehaceres.push({
        description: nuevoQuehacer,
        done: terminado
    });
   }
  }

  actualizarQuehacer(checked: boolean, componente){
    componente.done = checked;
  }
 filtrarQuehaceres(texto: string){
    if (texto === "Terminados") {
      this.filtro = "Terminados";
      this.botones[0].grande = true;
      this.botones[1].grande = false;
      this.botones[2].grande = false;
    }else if (texto === "Pendientes") {
      this.filtro = "Pendientes";
      this.botones[0].grande = false;
      this.botones[1].grande = true;
      this.botones[2].grande = false;
    }else {
      this.filtro ="Todos";
      this.botones[0].grande = false;
      this.botones[1].grande = false;
      this.botones[2].grande = true;
    }
 }
}
