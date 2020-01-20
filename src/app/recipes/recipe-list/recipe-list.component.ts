import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Kheer", "Milk, Topiaco and Bambino, Cook it Together and add enough sugar", "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kheer_with_condensed_milk_%28cropped%29.jpg"),
      new Recipe("Biryani", "Spices", "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
