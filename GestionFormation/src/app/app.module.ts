import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommercialComponentComponent } from './Component/commercial-component/commercial-component.component';
import { FormateurComponentComponent } from './Component/formateur-component/formateur-component.component';
import { FormationComponentComponent } from './Component/formation-component/formation-component.component';
import { HistoriqueComponentComponent } from './Component/historique-component/historique-component.component';
import { PaiementComponentComponent } from './Component/paiement-component/paiement-component.component';
import { ParticipantComponentComponent } from './Component/participant-component/participant-component.component';
import { PersonneComponentComponent } from './Component/personne-component/personne-component.component';
import { RDVComponentComponent } from './Component/rdvcomponent/rdvcomponent.component';
import { RoleComponentComponent } from './Component/role-component/role-component.component';
import { UtilisateurComponentComponent } from './Component/utilisateur-component/utilisateur-component.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ConnexionComponent } from './Component/connexion/connexion.component';
import { InscriptionComponent } from './Component/inscription/inscription.component';

import { InterceptorInterceptor } from './Interceptor/interceptor.interceptor';
import { MessageComponentComponent } from './Component/message-component/message-component.component';
import { MonCompteComponent } from './Component/mon-compte/mon-compte.component';


@NgModule({
  declarations: [
    AppComponent,
    CommercialComponentComponent,
    FormateurComponentComponent,
    FormationComponentComponent,
    HistoriqueComponentComponent,
    PaiementComponentComponent,
    ParticipantComponentComponent,
    PersonneComponentComponent,
    RDVComponentComponent,
    RoleComponentComponent,
    UtilisateurComponentComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    MessageComponentComponent,
    MonCompteComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true,
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
