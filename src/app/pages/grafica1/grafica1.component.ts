import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  public labels1: string[] = ['Pan', 'Chocolate', 'Leche'];
  public labels2: string[] = ['Agua', 'Vino', 'Aceite'];
  public labels3: string[] = ['Luz', 'Internet', 'Movil'];
  public labels4: string[] = ['Huevos', 'Salchichas', 'Harina'];

  public data1 = [
    [10,15,40]
  ]
  public data2 = [
    [35,150,83]
  ]
  public data3 = [
    [150, 87, 330]
  ]
  public data4 = [
    [70, 45, 1037]
  ]


}
