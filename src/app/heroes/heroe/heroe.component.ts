import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'Diana';
    edad:number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string{
        return `${this.nombre}- ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Pilar';
    }

    cambiarEdad():void{
        this.edad = 33;
    }
}