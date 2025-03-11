import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor() { }
}

export class SimulateurServiceService {
apiURL="http://localhost:8080/api-savon/v1"
  constructor(private http:HttpClient) { }

  getAllRecette(): Observable<RecetteService[]> {
    return this.http.get<RecetteService[]>(`${this.apiURL}/recette`);
  }}
