import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  username:string= "IanoSang";
  clientId: string = "69a77d3a9dcb6f2f7356";

  constructor( private http: HttpClient) {
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=${environment.clientSecret}");
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId +"&client_secret=${environment.clientSecret}");
  }
  updateUsername(username:any){
    this.username = username;
  }

}
