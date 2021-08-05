import { Component, OnInit } from '@angular/core';
import { GraphicModel } from './components/graphic/graphic.model';
import { TableFieldModel, TableModel } from './components/table/table.model';
import { CovidApiService } from './services/covid-api/covid-api.service';
import { CovidDataModel, CovidModel } from './services/covid-api/covid-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Dados formatados para o formato esperado pelo gráfico
  dataGraphic!: GraphicModel;
  // Dados que irão popular a tabela
  dataTable!: TableModel<CovidDataModel>;

  constructor(private covidApiService: CovidApiService) { }

  ngOnInit() {
    // Recupera todos os dados da api
    this.covidApiService.getCovidData().subscribe((response: CovidModel) => {
      // Realiza a formtação dos dados para os formatos esperados pelos componentes utilizados
      this.dataGraphic = this.formatDataForGraphic(response.results);
      this.dataTable = this.formatDataForTable(response.results);
    });
  }

  /**
   * Realiza a formatação dos dados passados para a função para o formato esperado pelo gráfico
   * @param data Dados a serem formatados
   * @returns Dados no formato esperado pelo gráfico
   */
  private formatDataForGraphic(data: CovidDataModel[]): GraphicModel {
    const confirmeds: number[] = [];
    const deaths: number[] = [];
    const states: string[] = [];

    data.forEach((item: CovidDataModel) => {
      confirmeds.push(item.confirmed);
      deaths.push(item.deaths);
      states.push(item.state);
    });

    return {
      value: [
        { data: confirmeds, label: 'Casos Confirmados' },
        { data: deaths, label: 'Mortes' },
      ],
      labels: states,
    };
  }

   /**
   * Realiza a formatação dos dados passados para a função para o formato esperado pela tabela
   * @param data Dados a serem formatados
   * @returns Dados no formato esperado pela tabela
   */
  private formatDataForTable(data: CovidDataModel[]): TableModel<CovidDataModel> {
    // Monta a configuração para a tabela
    const fields: TableFieldModel[] = [
      { columnName: 'UF',                keyOfValue: 'state' },
      { columnName: 'Casos confirmados', keyOfValue: 'confirmed', format: 'number' },
      { columnName: 'Mortes',            keyOfValue: 'deaths',    format: 'number' },
      { columnName: 'Data da Postagem',  keyOfValue: 'date',      format: 'date' },
    ];
    
    return { fields, data };
  }
}
