import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './Component/connexion/connexion.component';
import { FormateurComponentComponent } from './Component/formateur-component/formateur-component.component';
import { FormationComponentComponent } from './Component/formation-component/formation-component.component';
import { HistoriqueComponentComponent } from './Component/historique-component/historique-component.component';
import { InscriptionComponent } from './Component/inscription/inscription.component';
import { MessageComponentComponent } from './Component/message-component/message-component.component';
import { PaiementComponentComponent } from './Component/paiement-component/paiement-component.component';
import { ParticipantComponentComponent } from './Component/participant-component/participant-component.component';
import { PersonneComponentComponent } from './Component/personne-component/personne-component.component';
import { RDVComponentComponent } from './Component/rdvcomponent/rdvcomponent.component';
import { UtilisateurComponentComponent } from './Component/utilisateur-component/utilisateur-component.component';
import { GuardGuard } from './Guard/guard.guard';
import { MonCompteComponent } from './Component/mon-compte/mon-compte.component';

const routes: Routes = [
  {path:'connexion', component:ConnexionComponent},
  {path:'commercial/inscription', component:InscriptionComponent, canActivate : [GuardGuard], data : {role : "commercial"}},
  {path:'commercial/personnne', component:PersonneComponentComponent, canActivate : [GuardGuard], data : {role : "commercial"}},
  {path:'commercial/message/:id', component:MessageComponentComponent, canActivate : [GuardGuard], data : {role : "commercial"}},
  {path:'formateur/perso', component:FormationComponentComponent, canActivate : [GuardGuard], data : {role : "formateur"}},
  {path:'MonCompte', component:MonCompteComponent, canActivate : [GuardGuard]},
  {path:'formation', component:FormationComponentComponent, canActivate : [GuardGuard]},
  {path:'formation/:id', component:FormationComponentComponent, canActivate : [GuardGuard]},
  {path:'commercial/historique/:id', component:HistoriqueComponentComponent, canActivate : [GuardGuard], data : {role : "commercial"}},
  {path:'participant/paiement', component:PaiementComponentComponent, canActivate : [GuardGuard], data : {role : "participant"}},
  {path:'participant/perso', component:ParticipantComponentComponent, canActivate : [GuardGuard], data : {role : "participant"}},
  {path:'commercial/rdv', component:RDVComponentComponent, canActivate : [GuardGuard], data : {role : "commercial"}},
  {path:'admin/utilisateur', component:UtilisateurComponentComponent, canActivate : [GuardGuard], data : {role : "admin"}},
  {path:'admin/formateur', component:FormateurComponentComponent, canActivate : [GuardGuard], data : {role : "admin"}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
