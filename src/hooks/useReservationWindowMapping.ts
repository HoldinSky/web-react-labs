import {ReservationWindow} from "../components/ReservationDialog";
import {DAY_SHIFT_LENGTH} from "../misc/constants";
import getBeautifulDate, {reservationDateFormat} from "../misc/getBeautifulDate";
import {useMemo} from "react";

export function generateReservedRange(): ReservationWindow[] {
    const etalons =
        [{from: new Date("05-05-2024 10:00"), to: new Date("05-05-2024 13:00")},
            {from: new Date("05-05-2024 16:00"), to: new Date("05-05-2024 20:00")},
            {from: new Date("05-06-2024 11:00"), to: new Date("05-06-2024 15:00")},
            {from: new Date("05-06-2024 18:00"), to: new Date("05-06-2024 19:00")},
            {from: new Date("05-07-2024 10:00"), to: new Date("05-07-2024 11:00")},
            {from: new Date("05-07-2024 15:00"), to: new Date("05-07-2024 17:00")},
            {from: new Date("05-08-2024 12:00"), to: new Date("05-08-2024 12:00")},
            {from: new Date("05-08-2024 14:00"), to: new Date("05-08-2024 16:00")},
            {from: new Date("05-09-2024 18:00"), to: new Date("05-09-2024 21:00")},
            {from: new Date("05-09-2024 16:00"), to: new Date("05-09-2024 17:00")},
            {from: new Date("05-10-2024 13:00"), to: new Date("05-10-2024 14:00")}];

    return [
        etalons[Math.floor(Math.random() * etalons.length)],
        etalons[Math.floor(Math.random() * etalons.length)],
        etalons[Math.floor(Math.random() * etalons.length)]
    ];
}

function useReservationWindowMapping(reserved?: ReservationWindow[]): Map<string, boolean[]> {
    const reservedDays = useMemo(() => new Map<string, boolean[]>(), []);

    if (!reserved) return reservedDays;

    for (const reserve of reserved) {
        const day = getBeautifulDate(reserve.from, reservationDateFormat);

        const reservationArray = new Array<boolean>(DAY_SHIFT_LENGTH);

        const startHours = reserve.from.getHours() - 10;
        const endHours = reserve.to.getHours() - 10;

        for (let i = 0; i < DAY_SHIFT_LENGTH; i++) {
            reservationArray[i] = i >= startHours && i <= endHours;
        }

        reservedDays.set(day, reservationArray);
    }

    return reservedDays;
}


export default useReservationWindowMapping;