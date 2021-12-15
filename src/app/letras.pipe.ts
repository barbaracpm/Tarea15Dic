import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {

  //El método transform es el que se ejecuta cada vez que llamamos a la pipe 'letras' declarada en el decorador @Pipe.

  //El método transform recibe un parámetro obligatorio que es 'value' y puede ser de cualquier tipo (number, string, array, object etc.) y un segundo parámetro opcional.

  //El parámetro 'value' recibe el valor que debe procesar la pipe. El parámetro 'args' puede no llegar en dicho caso almacena un null.

  //Si en 'args' llega un null luego ejecuta el último switch de la función retornando en castellano el número almacenado en 'value'.

  transform(value: any, args?: any): any {
    value = parseInt(value);
    if (args != null) {
      if (args=='english')
        switch (value) {
          case 1: return 'one';
          case 2: return 'two';
          case 3: return 'three';
          case 4: return 'four';
          case 5: return 'five';
          case 6: return 'six';
          case 7: return 'seven';
          case 8: return 'eight';
          case 9: return 'nine';
        }
        if (args=='portuguese')
        switch (value) {
          case 1: return 'um';
          case 2: return 'dois';
          case 3: return 'três';
          case 4: return 'quatro';
          case 5: return 'cinco';
          case 6: return 'seis';
          case 7: return 'sete';
          case 8: return 'oito';
          case 9: return 'nove';
        }
    }
    switch (value) {
      case 1: return 'uno';
      case 2: return 'dos';
      case 3: return 'tres';
      case 4: return 'cuatro';
      case 5: return 'cinco';
      case 6: return 'seis';
      case 7: return 'siete';
      case 8: return 'ocho';
      case 9: return 'nueve';
    }
    return null;
  }


}
