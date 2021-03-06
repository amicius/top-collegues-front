import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {

  @Input() Lcollegues: Collegue[];
  page = 1;
  pageSize = 3;

  constructor() { }

  ngOnInit() {
  }

}
