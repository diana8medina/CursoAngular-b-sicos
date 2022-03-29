import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

 heroes:string[]=['Diana','Pilar','batman','spiderman']
 heroeBorrado:string = "";
 lenHeroeBorrado:number = 0;

 borrarHeroe():void{
   
   const heroeBorrado = this.heroes.shift() || '';
   this.heroeBorrado = heroeBorrado;
   this.lenHeroeBorrado= this.heroeBorrado.length;
  
 }

}
