import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeesComponent } from './recipees/recipees.component';
import { RecipeeListComponent } from './recipees/recipee-list/recipee-list.component';
import { RecipeeItemComponent } from './recipees/recipee-list/recipee-item/recipee-item.component';
import { RecipeeDetailComponent } from './recipees/recipee-detail/recipee-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeesComponent,
    RecipeeListComponent,
    RecipeeItemComponent,
    RecipeeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
