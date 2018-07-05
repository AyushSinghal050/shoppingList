import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeesComponent } from './recipees/recipees.component';
import { RecipeeListComponent } from './recipees/recipee-list/recipee-list.component';
import { RecipeeItemComponent } from './recipees/recipee-list/recipee-item/recipee-item.component';
import { RecipeeDetailComponent } from './recipees/recipee-detail/recipee-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeesStartComponent } from './recipees/recipees-start/recipees-start.component';
import { RecipeeEditComponent } from './recipees/recipee-edit/recipee-edit.component';
import { RecipeeService } from './recipees/recipee.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeesComponent,
    RecipeeListComponent,
    RecipeeItemComponent,
    RecipeeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeesStartComponent,
    RecipeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
