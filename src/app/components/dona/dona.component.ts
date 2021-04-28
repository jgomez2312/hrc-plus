import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {


  @Input() title: string = 'Sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Dato1', 'Dato2', 'Data3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors: Color[] = [
    {backgroundColor:['#a3e1d4','#dedede','#b5b8cf']}
  ]


}
