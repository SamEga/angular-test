import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PicturesListService {
  private apiKey = `563492ad6f917000010000015586d76ad28e48238864561b5a651640`;

  constructor(private http: HttpClient) {}

  getPictures() {
    return this.http.get(
      'https://api.pexels.com/v1/curated?per_page=10&page=1',
      {
        headers: { Authorization: this.apiKey }
      }
    );
  }
}
