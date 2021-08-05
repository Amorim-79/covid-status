import { formatDate, formatNumber } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { TableFieldInterface, TableInterface } from './interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {

  // Dados utilizados para popular a tabela
  @Input() public props!: TableInterface<any>;

  constructor() { }

  public ngOnChanges(): void {
    // Verifica se algum dos campos da tabela utilizará a formatação dos dados
    this.props?.fields.forEach((field: TableFieldInterface) => {
      if (field?.format) {
        this.transformData(field?.keyOfValue, field?.format);
      }
    });
  }

  /**
   * Transforma os dados para o formato local 'pt-br'
   * @param field atributo que sofrerá a transformação
   * @param format formato do campo
   */
  private transformData(field: string, format: string): void {
    this.props?.data.forEach((item) => {
      if (format === 'date') {
        item[field] = formatDate(item[field], 'dd/MM/yyyy', 'pt-br');
      } else if (format === 'number') {
        item[field] = formatNumber(item[field], 'pt-br');
      }
    });
  }

}
