export const indexToTime = (index: number) => `${10 + index}:00`;

export const timeToIndex = (time: string) => parseInt(time) - 10;