import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semana'
})
export class SemanaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = parseInt(value);
    if (args != null) {
      if (args=='english')
        switch (value) {
          case 1: return 'monday';
          case 2: return 'tuesday';
          case 3: return 'wednesday';
          case 4: return 'thursday';
          case 5: return 'friday';
          case 6: return 'saturday';
          case 7: return 'sunday';
        }

        if (args=='french')
        switch (value) {
          case 1: return 'lundi';
          case 2: return 'mardi';
          case 3: return 'mercredi';
          case 4: return 'jeudi';
          case 5: return 'vendredi';
          case 6: return 'samedi';
          case 7: return 'dimanche';

        }
    }
    switch (value) {
      case 1: return 'lunes';
      case 2: return 'martes';
      case 3: return 'miercoles';
      case 4: return 'jueves';
      case 5: return 'viernes';
      case 6: return 'sábado';
      case 7: return 'domingo';
    }
    return null;
  }


}
