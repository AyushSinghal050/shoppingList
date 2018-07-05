import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeesComponent } from './recipees/recipees.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeesStartComponent } from './recipees/recipees-start/recipees-start.component';
import { RecipeeDetailComponent } from './recipees/recipee-detail/recipee-detail.component';
import { RecipeeEditComponent } from './recipees/recipee-edit/recipee-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipees', pathMatch: 'full'},
    {path: 'recipees', component: RecipeesComponent, children: [
        { path: '', component: RecipeesStartComponent },
        { path: 'new', component: RecipeeEditComponent},
        { path: ':id', component: RecipeeDetailComponent},
        { path: ':id/edit', component: RecipeeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
