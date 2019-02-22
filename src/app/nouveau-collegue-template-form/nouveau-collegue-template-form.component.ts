import { Component, OnInit } from '@angular/core';
import { Collegue, ModelCollegue } from '../models';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  modelCollegue: ModelCollegue = new ModelCollegue();


  constructor(private _serv: DataService) { }

  ngOnInit() { }

  valider() {
    return this._serv.addCollegue(this.modelCollegue).subscribe(
      value => {
        // si ça se passe bien
      },
      error => {
        // si ça se passe mal
      }
    );
  }




}
