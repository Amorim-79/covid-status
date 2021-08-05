import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CovidModel } from './covid-data.model';

@Injectable({
  providedIn: 'root',
})
export class CovidApiService {

  private BASE_URL =  'https://api.brasil.io/v1/';
  
  // Token necessário para acessar a api
  private headers = {
    Authorization: 'Token 1c90e7d1641905646b7c4550870c0c410ca59bc4'
  };

  constructor(private http: HttpClient) { }

  /**
   * Recupera os dados sobre a covid, apenas dos estados do Brasil
   * @returns Observable da chamada a api dos dados da covid, buscando apenas pelos estados
   */
  public getCovidData(): Observable<CovidModel> {
    return this.http.get<CovidModel>(`${this.BASE_URL}dataset/covid19/caso/data`, {
      headers: this.headers,
      params: {
        place_type: 'state',
        is_last: 'True',
      }
    });
  }
}
