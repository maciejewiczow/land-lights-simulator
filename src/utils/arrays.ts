export const sum = (total: number, current: number) => total + current;

export const randomEntry = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
