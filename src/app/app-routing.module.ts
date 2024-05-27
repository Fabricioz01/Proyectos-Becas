import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './components/acerca-de-nosotros/acerca-de-nosotros.component';
import { AyudasEconomicasComponent } from './components/ayudas-economicas/ayudas-economicas.component';
import { ConsultaDeBecaComponent } from './components/consulta-de-beca/consulta-de-beca.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaWebComponent } from './components/pagina-web/pagina-web.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
  {path:"", redirectTo: "acerca-de-nosotros", pathMatch:"full"},
  {path:"acerca-de-nosotros",component: AcercaDeNosotrosComponent},
  {path:"ayudas-economicas",component: AyudasEconomicasComponent},

  {
    path:"consulta-de-beca",
    component: ConsultaDeBecaComponent,
    ...canActivate (() => redirectUnauthorizedTo (['login']))
  },


  {path:"formulario",component:FormularioComponent},
  {path:"login",component:LoginComponent},
  {path:"pagina-web",component:PaginaWebComponent},
  {path:"contacto",component:ContactoComponent},


  {path:"**", redirectTo:"acerca-de-nosotros", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }