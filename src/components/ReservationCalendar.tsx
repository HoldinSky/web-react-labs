import {ReservationWindow} from "./ReservationDialog";
import {useEffect, useState} from "react";
import "../styles/ReservationCalendar.scss";
import getBeautifulDate, {reservationDateFormat} from "../misc/getBeautifulDate";
import {DAY_SHIFT_LENGTH, ReservationTimeIndex} from "../misc/constants";
import useReservationWindowMapping from "../hooks/useReservationWindowMapping";
import {indexToTime} from "../misc/indexToTime";
import {useRequestContext} from "../misc/RequestContextProvider";

function HeaderCalendarRow() {
    return <div className="calendar-header">
        <div/>
        {Array.from({length: DAY_SHIFT_LENGTH}).map((_, ind) => (
            <p key={ind} className="header-time grid-self-center">{indexToTime(ind)}</p>
        ))}
    </div>;
}

function ReservationCell({isReserved, isChosen, onClick}: {
    isReserved: boolean,
    isChosen?: boolean,
    onClick: () => void
}) {
    return <div onClick={onClick}
                className={`reservation-cell ${isReserved ? "reserved" : isChosen ? "chosen" : "free"}`}/>
}

function ReservationDay({date, reservations}: { date: Date, reservations?: boolean[] }) {
    const readableDate = getBeautifulDate(date, reservationDateFormat);

    const {dates, setRequest} = useRequestContext();

    const onCellClick = (index: ReservationTimeIndex) => {
        if (!dates[readableDate]) {
            dates[readableDate] = new Set<ReservationTimeIndex>();
            dates[readableDate].add(index);
        } else if (dates[readableDate].has(index)) {
            dates[readableDate].delete(index);
        } else {
            dates[readableDate].add(index);
        }

        setRequest((prev) => ({
            ...prev, dates
        }));
    }

    return <div className="reservation-day">
        <p className="grid-self-center">{readableDate}</p>
        {Array.from({length: DAY_SHIFT_LENGTH}).map((_, ind) => (
            <ReservationCell key={ind}
                             isReserved={reservations ? reservations[ind] : false}
                             isChosen={dates[readableDate]?.has(ind as ReservationTimeIndex) ?? false}
                             onClick={() => onCellClick(ind as ReservationTimeIndex)}/>
        ))}
    </div>
}

function ReservationCalendar({reserved}: { reserved?: ReservationWindow[] }) {
    const [dates, setDates] = useState<Date[]>([]);

    useEffect(() => {
        const today = new Date();

        const reachableDates = Array.from({length: 7})
            .map((_, index) => {
                const date = new Date();
                date.setDate(today.getDate() + index);
                return date;
            });

        setDates(reachableDates);
    }, []);

    const reservationsMap = useReservationWindowMapping(reserved);

    return <div className="flex-self-center">
        <div className="reservation-calendar">
            <HeaderCalendarRow/>
            {dates.map((day) =>
                <ReservationDay key={day.getTime()} date={day}
                                reservations={reservationsMap.get(getBeautifulDate(day, reservationDateFormat))}/>
            )}
        </div>
    </div>;
}

export default ReservationCalendar;