import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurComponentComponent } from './Component/formateur-component/formateur-component.component';

const routes: Routes = [
                        {path:"formateurs", component:FormateurComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
