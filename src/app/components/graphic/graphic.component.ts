import { Component, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraphicModel } from './graphic.model';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnChanges {

  // Dados utilizados pelo gráfico
  @Input('data') data!: GraphicModel;

  // Atributos utillizados pelo gráfico
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnChanges() {
    this.setGraphicAttributes();
  }

  /**
   * Seta os atributos necessários para o funcionamento do gráfico
   */
  private setGraphicAttributes() {
    this.barChartLabels = this.data?.labels;
    this.barChartData = this.data?.value;
  }

}
