import RestaurantTable, {SeatCountType} from "./RestaurantTable";
import "../styles/HallLayout.scss"
import "../styles/App.scss"
import Layout from "./Layout";

function HallLayout() {

    const openMenu = () => {

    };

    return (
        <Layout>
            {{
                header: (
                    <div className="menu" onClick={openMenu}>Menu</div>
                ),
                body: (
                    <div className="flex-column reset-spacing">
                        <h1 className="self-center" style={{margin: "16px 0 16px 0"}}>Please choose table to
                            reserve</h1>
                        <div className="hall-container">
                            {Array.from({length: 14}).map((_, index) => (
                                <div className="table-in-hall self-center" key={index}>
                                    <RestaurantTable id={index + 1}
                                                     seatsCount={(index % 8 + 1) as SeatCountType}
                                                     isBooked={(index % 4) === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }}
        </Layout>
    );
}


export default HallLayout;