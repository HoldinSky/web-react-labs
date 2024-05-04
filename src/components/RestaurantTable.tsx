import "../styles/RestaurantTable.scss";

export type SeatCountType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface Props {
    id: number;
    seatsCount: SeatCountType;

    isBooked: boolean;
}

function RestaurantTable({id, seatsCount, isBooked}: Props) {

    const handleClick = () => {
        console.log("RestaurantTable::handleClick -- clicked on ", id, "table");
    };

    return <div className={`table-container-${seatsCount}`} onClick={handleClick}>
        {Array.from({length: seatsCount}).map((_, index) => (
            <div key={index} className="seat"/>
        ))}
        <div className="table">
            <p>{isBooked ? "Reserved" : id}</p>
        </div>
    </div>;
}


export default RestaurantTable;