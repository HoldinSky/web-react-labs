import {Dish, DishType} from "./types";

export function generateDishes(): Dish[] {
    return [
        {
            type_: DishType.Main,
            name: "Borsch",
            portionWeightG: 340,
            price: 85,
            approxCookTimeS: 1200,
        },
        {
            type_: DishType.Main,
            name: "Mushroom Soup",
            portionWeightG: 320,
            price: 100,
            approxCookTimeS: 1320,
        },
        {
            type_: DishType.Main,
            name: "Lasagna",
            portionWeightG: 440,
            price: 120,
            approxCookTimeS: 2400,
        },
        {
            type_: DishType.Appetizer,
            name: "Sandwich",
            portionWeightG: 250,
            price: 45,
            approxCookTimeS: 120,
        },
        {
            type_: DishType.Appetizer,
            name: "Oysters",
            portionWeightG: 220,
            price: 210,
            approxCookTimeS: 300,
        },
        {
            type_: DishType.Garnish,
            name: "French Potatoes",
            portionWeightG: 460,
            price: 150,
            approxCookTimeS: 1800,
        },
        {
            type_: DishType.Garnish,
            name: "Pasta with seafood",
            portionWeightG: 340,
            price: 135,
            approxCookTimeS: 1200
        },
        {
            type_: DishType.Cold,
            name: "Grated beetroot",
            portionWeightG: 230,
            price: 75,
            approxCookTimeS: 540,
        },
        {
            type_: DishType.Cold,
            name: "Aspic",
            portionWeightG: 360,
            price: 90,
            approxCookTimeS: 300,
        },
        {
            type_: DishType.Salad,
            name: "Olivier",
            portionWeightG: 300,
            price: 80,
            approxCookTimeS: 900,
        },
        {
            type_: DishType.Salad,
            name: "Greek",
            portionWeightG: 250,
            price: 75,
            approxCookTimeS: 600,
        },
        {
            type_: DishType.Drink,
            name: "Orange juice",
            portionWeightG: 300,
            price: 40,
            approxCookTimeS: 120,
        },
        {
            type_: DishType.Drink,
            name: "Coca-Cola",
            portionWeightG: 300,
            price: 30,
            approxCookTimeS: 120
        },
        {
            type_: DishType.Alcohol,
            name: "Rum (Captain Morgan)",
            portionWeightG: 100,
            price: 90,
            approxCookTimeS: 60,
        },
        {
            type_: DishType.Alcohol,
            name: "Cognac (Jack Daniel's)",
            portionWeightG: 100,
            price: 120,
            approxCookTimeS: 60,
        },

    ];
}