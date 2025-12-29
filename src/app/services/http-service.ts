import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from 'src/assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'https://api.spoonacular.com';
  private apiKey = apiKey;

  constructor(private http: HttpClient) {}

  // get recipe details
  getRecipeDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/recipes/${id}/information`);
  }
}
