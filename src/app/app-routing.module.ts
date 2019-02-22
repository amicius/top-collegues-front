import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';

const routes: Routes = [
  { path: "accueil", component: AccueilComponentComponent },
  { path: "ajout", component: NouveauCollegueTemplateFormComponent },
  { path: "", pathMatch: "full", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
