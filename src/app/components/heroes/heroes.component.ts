import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})
export class HeroesComponent implements OnInit {
heroes:Heroe[]=[];


//el private es una propiedad privada que solo puede ser vista por este componente
  constructor( private _heroesServive:HeroesService ) {
  console.log("constructor");
 }

  ngOnInit() {
    this.heroes = this._heroesServive.getHeroes();
    console.log(this.heroes);
  }



}
