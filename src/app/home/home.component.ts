import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  racers: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRacers().subscribe(racerData => {
      this.racers = racerData['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
      console.log(racerData);
    })
  }

}
