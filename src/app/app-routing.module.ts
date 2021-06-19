import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchComponent } from './user/search.component';

const routes: Routes = [
  {path:"index", component:SearchComponent},
  {path:"repository", component:RepositoriesComponent},
  {path: "", redirectTo:"/index", pathMatch:"full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }