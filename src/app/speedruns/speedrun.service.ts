import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeedrunService {
  speedrunComBaseUrl = 'https://www.speedrun.com/api/v1';
  splitioBaseUrl = 'https://splits.io/api/v3';
  categoryCache = {};
  nameCache = {};

  constructor(private http: HttpClient) { }

  public getSpeedruns() {
    const url = `${this.speedrunComBaseUrl}/runs?user=1xy5ryy8&orderby=date&direction=desc&embed=game,category,platform`;
    return this.http.get(url);
  }

  public getPersonalBests() {
    const url = `${this.speedrunComBaseUrl}/users/1xy5ryy8/personal-bests?embed=game,category`;
    return this.http.get(url);
  }

  public async getSplitsIoData(url) {
    return this.http.get(url).toPromise();
  }

  public async getCategoryName(id) {
    if (this.categoryCache[id]) {
      console.log('Category Cached');
      return this.categoryCache[id];
    }

    const url = `${this.speedrunComBaseUrl}/categories/${id}`;
    const response = await this.http.get(url).toPromise();
    const name = response['data']['name'];
    this.categoryCache[id] = name;
    return name;
  }

  public async getGameName(id) {
    if (this.nameCache[id]) {
      console.log('Name Cached');
      return this.nameCache[id];
    }

    const url = `${this.speedrunComBaseUrl}/games/${id}`;
    const response = await this.http.get(url).toPromise();
    const name = response['data']['names']['international'];
    this.nameCache[id] = name;
    return name;
  }
}
