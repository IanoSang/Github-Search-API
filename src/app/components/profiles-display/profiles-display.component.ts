import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-profiles-display',
  templateUrl: './profiles-display.component.html',
  styleUrls: ['./profiles-display.component.css']
})
export class ProfilesDisplayComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
