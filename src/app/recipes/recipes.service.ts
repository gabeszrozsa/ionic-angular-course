import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1.jpg',
      ingredients: ['French fires', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl:
        'https://images.aws.nestle.recipes/resized/4eihtj7mkqigycwz6te7ktfbfzrmv94t_tablet_944_531.jpg',
      ingredients: ['Spagetti', 'Meat', 'Tomato'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }
}
