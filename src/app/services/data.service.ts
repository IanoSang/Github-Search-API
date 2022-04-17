import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public username:string= "IanoSang";
  // public repoName!: string;
  public clientId: string = "69a77d3a9dcb6f2f7356";
  public clientSecret: string = "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";
  // public apikey:string='be05ad82ef1dec303061648a172836e81613bc78';

  constructor( private http: HttpClient) {
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  updateUsername(username:string){
    this.username = username;
  }

}
