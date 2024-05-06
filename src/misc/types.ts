export type SeatCountType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// depends on DAY_SHIFT_LENGTH
export type ReservationTimeIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ReservationWindow = {
    from: Date;
    to: Date;
};

export type DateTimeFormatType = {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long";
    day?: "numeric" | "2-digit";
}

export enum DishType {
    Main = "Main",
    Appetizer = "Appetizer",
    Garnish = "Garnish",
    Cold = "Cold",
    Salad = "Salad",
    Drink = "Drink",
    Alcohol = "Alcohol",
}

export interface Dish {
    name: string;
    type_: DishType;
    portionWeightG: number;
    price: number;
    approxCookTimeS: number;
}
