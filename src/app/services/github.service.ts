import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  githubURL:string = 'https://api.github.com/users/nicohnavarro';
  constructor(private http: HttpClient) { }
 
  getGithubInfo(){
    return this.http.get<any>(this.githubURL);
  }
}