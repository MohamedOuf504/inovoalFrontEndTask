import { ApplicationDevelopmentComponent } from './application-development/application-development.component';
import { ApplicationsComponent } from './applications/applications.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes =
  [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "category", component: CategoryComponent },
  { path: "applications", component: ApplicationsComponent },
  { path: "applicationsDev", component: ApplicationDevelopmentComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
