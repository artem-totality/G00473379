import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) {}

  // get recipe details
  getRecipeDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/recipes/${id}/information`);
  }
}
