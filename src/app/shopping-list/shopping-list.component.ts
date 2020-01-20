import {Component, OnInit} from '@angular/core';
import {Ingredients} from "../commons/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients("Apples", 10),
    new Ingredients("Mile", 1),
    new Ingredients("Almonds", 15)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
