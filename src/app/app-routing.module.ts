import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { AuthorComponent } from './author/author.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'random', component: RandomComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'keywords', component: KeywordsComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
