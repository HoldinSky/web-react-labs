export type DateTimeFormatType = {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long";
    day?: "numeric" | "2-digit";
}

export const dateOptions: DateTimeFormatType = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const reservationDateFormat: DateTimeFormatType = {
    month: "2-digit",
    day: "2-digit",
};

function getBeautifulDate(date: Date, options: DateTimeFormatType = dateOptions) {
    return date.toLocaleDateString("uk-UA", options);
}

export default getBeautifulDate;