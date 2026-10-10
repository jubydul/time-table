/**
 * Creates a copy of the provided date with the time normalized to the start of the UTC day.
 *
 * @param date - The date to normalize.
 * @returns A new Date instance with hours, minutes, seconds, and milliseconds set to zero.
 */
export function startOfDay(date: Date): Date {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    return d;
}

/**
 * Creates a copy of the provided date with the time set to the very end of the UTC day.
 *
 * @param date - The date to normalize.
 * @returns A new Date instance with the final millisecond of the day.
 */
export function endOfDay(date: Date): Date {
    const d = new Date(date);
    d.setUTCHours(23, 59, 59, 999);
    return d;
}

/**
 * Adds a number of calendar days to a date without mutating the original value.
 *
 * @param date - The base date.
 * @param days - The number of days to add; this can be positive or negative.
 * @returns A new Date instance shifted by the specified number of days.
 */
export function addDays(date: Date, days: number): Date {
    const d = new Date(date);
    d.setUTCDate(d.getUTCDate() + days);
    return d;
}

/**
 * Determines whether two dates fall on the same UTC calendar day.
 *
 * @param date1 - The first date to compare.
 * @param date2 - The second date to compare.
 * @returns True when both dates share the same year, month, and day, ignoring time-of-day.
 */
export function isSameDay(date1: Date, date2: Date): boolean {
    return (
        date1.getUTCFullYear() === date2.getUTCFullYear() &&
        date1.getUTCMonth() === date2.getUTCMonth() &&
        date1.getUTCDate() === date2.getUTCDate()
    );
}

/**
 * Formats a Date as a YYYY-MM-DD string using UTC values.
 *
 * @param date - The date to format.
 * @returns A string in ISO-like YYYY-MM-DD format for the given UTC date.
 */
export function formatDate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}