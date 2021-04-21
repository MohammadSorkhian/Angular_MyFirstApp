import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListsService } from './shopping-lists.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  // styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListsService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe( (ingredients:Ingredient[]) => this.ingredients = ingredients )
  }


}
