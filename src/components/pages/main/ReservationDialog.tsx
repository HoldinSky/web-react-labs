import ReservationCalendar from "./ReservationCalendar";
import "../../../styles/ReservationDialog.scss"
import {Dialog, DialogActions, DialogContent, DialogTitle, Input, styled} from "@mui/material";
import React, {useCallback, useMemo, useState} from "react";
import {ReservationRequest, useRequestContext} from "../../../misc/RequestContextProvider";
import {REGEXP_IS_NUM, REGEXP_NOT_NUM} from "../../../misc/constants";
import {ReservationWindow} from "../../../misc/types";

const CustomDialog = styled(Dialog)(({theme}) => ({
    '& .MuiPaper-root': {
        maxWidth: "100%",
        borderRadius: theme.spacing(2),
        backgroundColor: "#c9dbba",
    },
    '& .MuiDialogTitle-root': {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    '& .MuiDialogContent-root': {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    '& .MuiDialogActions-root': {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
}));

const BeautifulInput = styled(Input)(({theme}) => ({
    margin: `${theme.spacing(2)} 0 `,
    width: theme.spacing(30),
    font: "italic small-caps bold 16px cursive",
}));

interface Props {
    id: number;
    isOpen: boolean;
    onClose: (event: Object, reason: string, newReserve?: ReservationRequest) => void;

    reservedRanges?: ReservationWindow[];
}

function ReservationDialog({id, isOpen, onClose, reservedRanges}: Props) {
    const {name, dates, phoneNumber, setRequest} = useRequestContext();

    const canConfirm = useMemo(
        () => name.length > 0 && phoneNumber.length === 12 && Object.entries(dates).length > 0,
        [dates, name.length, phoneNumber.length]
    );

    const setName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newName = event.target.value;
        setRequest(prev => ({...prev, name: newName}));
    }

    const [visiblePhone, setVisiblePhone] = useState("");

    const setPhone = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let val = event.target.value.replaceAll(REGEXP_NOT_NUM, "");

        if (val.length === 0) {
            setRequest((prev) => ({
                ...prev, phoneNumber: ""
            }));
            setVisiblePhone("");

            return;
        }

        if (val.length > 10) return;

        const newChar = val.at(val.length - 1);
        if (!newChar) return;

        if (!REGEXP_IS_NUM.test(newChar)) return;

        setRequest((prev) => ({
            ...prev, phoneNumber: val
        }));

        if (val.length > 6) {
            val = val.slice(0, 3) + "-" + val.slice(3, 6) + "-" + val.slice(6);
        } else if (val.length > 3) {
            val = val.slice(0, 3) + "-" + val.slice(3);
        }

        setVisiblePhone(val);
    }

    const closeButton = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClose(event, "close"), [onClose]);

    const confirmButton = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClose(event, "confirm", {name, dates, phoneNumber}), [dates, name, onClose, phoneNumber]);

    return <CustomDialog disableEscapeKeyDown onClose={onClose} className="dialog reset-spacing" open={isOpen}>
        <DialogTitle className="reset-spacing">
            <p className="dialog-label">Reserve table {id}</p>
        </DialogTitle>
        <DialogContent>
            <p className="dialog-description">From the table below choose time convenient for you. Leave your contacts
                for us to confirm your reservation.</p>
            <ReservationCalendar reserved={reservedRanges}/>
            <div className="flex-column">
                <BeautifulInput value={name} onChange={setName} placeholder={"Name"}/>
                <div className="flex-row">
                    <BeautifulInput value={visiblePhone} onChange={setPhone} placeholder={"Phone number"}/>
                    <p className="phone-scheme flex-self-center">(096-123-4567)</p>
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <div className="flex-row flex-self-center expander">
                <button onClick={closeButton} className="close">Close</button>
                <div className="expander"/>
                <button onClick={confirmButton} className="confirm" disabled={!canConfirm}>Confirm</button>
            </div>
        </DialogActions>
    </CustomDialog>
}

export default ReservationDialog;