import React, {createContext, ReactNode, SetStateAction, useContext, useState} from "react";
import {ReservationTimeIndex} from "./types";

export interface ReservationRequest {
    dates: Record<string, Set<ReservationTimeIndex>>;
    name: string;
    phoneNumber: string;
}

interface ContextInterface extends ReservationRequest {
    setRequest: React.Dispatch<SetStateAction<ReservationRequest>>
}

const initial: ContextInterface = {
    dates: {},
    name: "",
    phoneNumber: "",
    setRequest: () => {
    },
}

export const RequestContext = createContext<ContextInterface>(initial);

export const useRequestContext = () => {
    return useContext(RequestContext);
}

export function RequestContextProvider({children}: { children: ReactNode }) {
    const [request, setRequest] = useState<ReservationRequest>({...initial});

    return <RequestContext.Provider
        value={{...request, setRequest}}>
        {children}
    </RequestContext.Provider>
}