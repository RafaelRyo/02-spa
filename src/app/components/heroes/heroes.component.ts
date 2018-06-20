import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
//
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})
export class HeroesComponent implements OnInit {
heroes:Heroe[]=[];


//el private es una propiedad privada que solo puede ser vista por este componente
  constructor( private _heroesServive:HeroesService,
  /*aqui hago otra propiedad para hacer la ruta*/private router:Router ) {
  console.log("constructor");
 }

  ngOnInit() {
    this.heroes = this._heroesServive.getHeroes();
    console.log(this.heroes);
  }
  //esto es una funcion donde hago para poder utilizar el btn ver mas
  //
verHeroe(idx:number){
  this.router.navigate(['/heroe',idx]);
}


}
