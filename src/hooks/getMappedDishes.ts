import {Dish, DishType} from "../misc/types";

export function getMappedDishes(dishes: Dish[]): Record<DishType, Dish[]> {
    const mapped: Record<DishType, Dish[]> = {
        [DishType.Main]: [],
        [DishType.Appetizer]: [],
        [DishType.Garnish]: [],
        [DishType.Cold]: [],
        [DishType.Salad]: [],
        [DishType.Drink]: [],
        [DishType.Alcohol]: [],
    };

    for (const dish of dishes) {
        mapped[dish.type_].push(dish);
    }

    return mapped;
}