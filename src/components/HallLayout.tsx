import RestaurantTable, {SeatCountType} from "./RestaurantTable";
import "../styles/HallLayout.scss"
import Layout from "./Layout";
import getBeautifulDate from "../misc/getBeautifulDate";
import {RequestContextProvider} from "../misc/RequestContextProvider";

function HallLayout() {

    const today = getBeautifulDate(new Date());

    return (
        <Layout>
            {{
                header: (
                    <>
                        {/*<button className="menu-button" onClick={openMenu}>Menu</button>*/}
                        <div className="expander"/>
                        <div>{today}</div>
                    </>
                ),
                body: (
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
                )
            }}
        </Layout>
    );
}


export default HallLayout;