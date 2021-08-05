import { Component, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPluginsOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraphicModel } from './graphic.model';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
})
export class GraphicComponent implements OnChanges {

  // Dados utilizados pelo gráfico
  @Input() public data!: GraphicModel;

  // Atributos utillizados pelo gráfico
  public barChartOptions: ChartOptions = { responsive: true };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend: boolean = true;
  public barChartPlugins: ChartPluginsOptions[] = [];
  public barChartData: ChartDataSets[] = [];

  constructor() { }

  public ngOnChanges(): void {
    this.setGraphicAttributes();
  }

  /**
   * Seta os atributos necessários para o funcionamento do gráfico
   */
  private setGraphicAttributes(): void {
    this.barChartLabels = this.data?.labels;
    this.barChartData = this.data?.value;
  }

}
