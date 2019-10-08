import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favmovie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.css']
})
export class FavmovieComponent implements OnInit {

  bigHero: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBigHero().subscribe(
      filmpjes => this.bigHero = filmpjes
    );
  }
}
