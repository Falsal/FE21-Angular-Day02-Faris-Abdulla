import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './addcar/addcar.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent
  },

  {
    path: "list",component: ListComponent
  },
  {
    path: "form",component: FormComponent
  },
  {
    path: "addcar",component: AddcarComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
