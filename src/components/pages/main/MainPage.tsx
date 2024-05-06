import "../../../styles/HallLayout.scss"
import {RequestContextProvider} from "../../../misc/RequestContextProvider";
import RestaurantTable from "../main/RestaurantTable";
import {SeatCountType} from "../../../misc/types";

function MainPage() {
    return (
        <div className="flex-column reset-spacing">
            <h1 className="flex-self-center" style={{margin: "16px 0 16px 0"}}>Please choose table to
                reserve</h1>
            <div className="hall-container">
                {Array.from({length: 14}).map((_, index) => (
                    <div className="table-in-hall flex-self-center" key={index}>
                        <RequestContextProvider>
                            <RestaurantTable id={index + 1}
                                             seatsCount={(index % 8 + 1) as SeatCountType}
                            />
                        </RequestContextProvider>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default MainPage;