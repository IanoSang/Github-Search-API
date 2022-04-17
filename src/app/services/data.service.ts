import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public username:string= "IanoSang";
  public repoName!: string;
  public clientId: string = "c789323b20a2d31dc9fa";
  public clientSecret: string = "83e428e5ed1c99fded8ab02686753f74656f9f6b";
  apikey:string='be05ad82ef1dec303061648a172836e81613bc78';

  constructor( private http: HttpClient) {
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

}
