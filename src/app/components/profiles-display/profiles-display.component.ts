import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-profiles-display',
  templateUrl: './profiles-display.component.html',
  styleUrls: ['./profiles-display.component.css']
})
export class ProfilesDisplayComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'IanSang'
  imageWidth: number = 150;
  imageHeight: number = 200;
  constructor(private dataService: DataService) { }


  findUser () {
    this.dataService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })

  }

  ngOnInit(): void {
    this.findUser()
  }

}
