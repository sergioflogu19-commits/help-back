import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion'
})
export class CalificacionPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1) return 'Muy Mala';
    if (value == 2) return 'Mala';
    if (value == 3) return 'Regular';
    if (value == 4) return 'Buena';
    if (value == 5) return 'Muy Buena';
    return null;
  }

}
