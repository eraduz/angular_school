import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor() { }
  
  persoon = {
      name: 'Reda',
      surname: 'Eradus',
      age: function() {
        var date = new Date();
        return date.getFullYear() - 2000;
      },
      adres: 'Loelielaan 32, 2012 EJ Leiden'
    }
  

  ngOnInit() {
  }
}
