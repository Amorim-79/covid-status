import { formatDate, formatNumber } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { CovidDataModel } from 'src/app/services/covid-api/covid-data.model';
import { TableModel } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  // Dados utilizados para popular a tabela
  @Input() props!: TableModel<any>;

  constructor() { }

  ngOnChanges(): void {
    // Verifica se algum dos campos da tabela utilizará a formatação dos dados
    this.props?.fields.forEach((field) => {
      if (field?.format) {
        this.transformData(field.keyOfValue, field.format);
      }
    });
  }

  /**
   * Transforma os dados para o formato local 'pt-br'
   * @param field atributo que sofrerá a transformação
   * @param format formato do campo
   */
  private transformData(field: string, format: string) {
    this.props.data.forEach((item) => {
      if (format === 'date') {
        item[field] = formatDate(item[field], 'dd/MM/yyyy', 'pt-br');
      } else if (format === 'number') {
        item[field] = formatNumber(item[field], 'pt-br');
      }
    });
  }

}
