import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    { path: 'articles', component: ArticlesComponent},
    { path: 'new-articles', component: NewArticleComponent},
    { path: 'edit-articles/:id', component: EditArticleComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ArticlesComponent, NewArticleComponent, EditArticleComponent];
