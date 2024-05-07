import "../../styles/Menu.scss"
import {useEffect, useState} from "react";
import {generateDishes} from "../../misc/generateDishes";
import {Dish, DishType} from "../../misc/types";
import {getMappedDishes} from "../../hooks/getMappedDishes";
import axios from "axios";

function DishRepresentation({dish}: { dish: Dish }) {
    const readableCookingTime = (cookTimeS: number): string => {
        return `~${cookTimeS / 60} min`;
    }

    return <div className="dish-container">
        <p className="dish-name">{dish.name}</p>
        <div className="dish-description">
            <div>
                <p className="weight">Portion weight: {dish.portionWeightG} g</p>
                <p className="cook-time">Cooking time: {readableCookingTime(dish.approxCookTimeS)}</p>
                <p className="price">Price: {dish.price} UAH</p>
            </div>
            <img className="image" src={require("../../assets/dish-placeholder.jpeg")} alt="Dish placeholder"/>
        </div>
    </div>
}

function MenuPage() {
    const [dishes, setDishes] = useState<Record<DishType, Dish[]>>();

    useEffect(() => {
        axios.get("http://localhost:3001/menu")
            .then(resp => setDishes(getMappedDishes(resp.data)))
            .catch(err => console.error("Failed to get data from API:", err));
    }, []);

    return <div style={{width: "100%"}}>
        <h1 className="flex-self-center">Menu</h1>
        <div className="menu-content">
            {dishes &&
                Object.keys(DishType).map((type) => (
                    <div key={type} className="menu-section">
                        <div className="header">
                            {type}
                        </div>
                        <div className="dish-list">
                            {dishes[type as DishType].map(dish => <DishRepresentation key={dish.name} dish={dish}/>)}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}

export default MenuPage;