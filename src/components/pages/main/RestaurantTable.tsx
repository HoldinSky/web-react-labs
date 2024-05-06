import "../../../styles/RestaurantTable.scss";
import {useRef, useState} from "react";
import ReservationDialog from "./ReservationDialog";
import {generateReservedRange} from "../../../hooks/useReservationWindowMapping";
import {ReservationRequest, useRequestContext} from "../../../misc/RequestContextProvider";
import {indexToTime} from "../../../misc/indexToTime";
import {SeatCountType} from "../../../misc/types";

interface Props {
    id: number;
    seatsCount: SeatCountType;
}

function RestaurantTable({id, seatsCount}: Props) {
    const [dialogOpen, setDialogOpen] = useState(false);

    const reserved = useRef(generateReservedRange());

    const handleOpenDialog = () => {
        if (dialogOpen) return;
        setDialogOpen(true);
    };

    const {setRequest} = useRequestContext();

    const handleCloseDialog = (_: Object, reason: string, newReserve?: ReservationRequest) => {
        if (reason && reason === "backdropClick") {
            return;
        }

        setDialogOpen(false);

        const readableDates: Map<string, string[]> = new Map<string, string[]>();

        if (!newReserve?.dates) {
            return;
        }

        Object.entries(newReserve?.dates!).filter(([, set]) => set.size > 0)
            .forEach(([date, set]) => {
                const times: string[] = [];

                set.forEach(index => times.push(indexToTime(index)));
                readableDates.set(date, times.sort());
            });

        console.log({name: newReserve?.name, phone: newReserve?.phoneNumber, dates: readableDates});

        // handle reservation confirm: send http request to backend

        setRequest({name: "", phoneNumber: "", dates: {}});
    }

    return <div className={`table-container-${seatsCount}`} onClick={handleOpenDialog}>
        {Array.from({length: seatsCount}).map((_, index) => (
            <div key={index} className="seat"/>
        ))}
        <div className="table">
            <p>{id}</p>
        </div>

        <ReservationDialog id={id}
                           isOpen={dialogOpen}
                           onClose={handleCloseDialog}
                           reservedRanges={reserved.current}
        />
    </div>;
}


export default RestaurantTable;