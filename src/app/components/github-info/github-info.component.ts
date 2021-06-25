import { GithubService } from './../../services/github.service';
import { GithubProfile } from './../../models/GithubProfile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-info',
  templateUrl: './github-info.component.html',
  styleUrls: ['./github-info.component.scss']
})
export class GithubInfoComponent implements OnInit {

  githubProfile:GithubProfile;
  isLoading:boolean=true;
  constructor(private githubSvc:GithubService) { 
    this.githubProfile={name:null,location:null,avatar:null,followers:0,following:0};
  }
  
  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.githubSvc.getGithubInfo().subscribe(data=>{
      const {login,location,avatar_url,followers,following} = data;
      this.githubProfile = {'name':login,location,'avatar':avatar_url,followers,following}
      this.isLoading=false;
    })
  }
}
