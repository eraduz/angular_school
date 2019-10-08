import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  Matrix: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMatrix().subscribe(
      filmpjes => this.Matrix = filmpjes
    );
  }

}
