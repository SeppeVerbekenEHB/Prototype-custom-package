/**
 * Formats a date according to a given format string.
 * @param {Date} date - De datum
 * @param {string} format - Het gewenste formaat, bijvoorbeeld 'YYYY-MM-DD'
 * @returns {string} De geformatteerde datum
 */
function formatDate(date, format) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
}

/**
 * Adds a number of days to a given date.
 * @param {Date} date - De oorspronkelijke datum
 * @param {number} days - Aantal dagen om toe te voegen
 * @returns {Date} De nieuwe datum
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Controlls if a given date is a weekend day
 * @param {Date} date - De datum
 * @returns {boolean} True als het weekend is, anders false
 */
function isWeekend(date) {
    const day = date.getDay(); // 0 = zondag, 6 = zaterdag
    return day === 0 || day === 6;
}

/**
 * converts a date to a readable string
 * @param {Date} date - De datum
 * @returns {string} Een leesbare weergave van de datum, bijvoorbeeld '19 november 2024'
 */
function toReadableString(date) {
    const months = [
        'januari', 'februari', 'maart', 'april', 'mei', 'juni',
        'juli', 'augustus', 'september', 'oktober', 'november', 'december'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}


const { toZonedTime } = require('date-fns-tz');
const { utcToZonedTime } = require('date-fns-tz');
/**
 * Converts a date from one time zone to another. and returns a Date object
 * @param {Date} date - The date to be converted.
 * @param {string} toZone - The target time zone (e.g., 'America/New_York').
 * @returns {Date} - The converted date in the target time zone.
 */
function convertTimeZone(date, toZone) {
    return toZonedTime(date, toZone);
}

/**
 * Calculates how long ago a given date occurred relative to now. and returns a string
 * @param {Date} date - The date to compare.
 * @returns {string} - A string representing the relative time (e.g., "2 days ago").
 */
function timeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year(s) ago`;
    if (days > 0) return `${days} day(s) ago`;
    if (hours > 0) return `${hours} hour(s) ago`;
    if (minutes > 0) return `${minutes} minute(s) ago`;
    return `${seconds} second(s) ago`;
}

/**
 * Calculates how far in the future a given date is relative to now. and returns a string
 * @param {Date} date - The date to compare.
 * @returns {string} - A string representing the relative time (e.g., "3 days from now").
 */
function timeUntil(date) {
    const now = new Date();
    const diff = date - now;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year(s) from now`;
    if (days > 0) return `${days} day(s) from now`;
    if (hours > 0) return `${hours} hour(s) from now`;
    if (minutes > 0) return `${minutes} minute(s) from now`;
    return `${seconds} second(s) from now`;
}

/**
 * Generates a list of recurring dates based on a start date and frequency.
 * @param {Date} startDate - The starting date.
 * @param {string} frequency - The frequency ('daily', 'weekly', 'monthly', or 'yearly').
 * @param {number} occurrences - The number of occurrences to generate.
 * @returns {Date[]} - An array of recurring dates.
 */
function getRecurringDates(startDate, frequency, occurrences) {
    const dates = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < occurrences; i++) {
        dates.push(new Date(currentDate));
        switch (frequency) {
            case 'daily':
                currentDate.setDate(currentDate.getDate() + 1);
                break;
            case 'weekly':
                currentDate.setDate(currentDate.getDate() + 7);
                break;
            case 'monthly':
                currentDate.setMonth(currentDate.getMonth() + 1);
                break;
            case 'yearly':
                currentDate.setFullYear(currentDate.getFullYear() + 1);
                break;
        }
    }

    return dates;
}

/**
 * Determines if a given date falls on a business day (Monday-Friday).
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is a business day, false otherwise.
 */
function isBusinessDay(date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
}

/**
 * Finds the next business day after a given date.
 * @param {Date} date - The starting date.
 * @returns {Date} - The next business day.
 */
function getNextBusinessDay(date) {
    const nextDate = new Date(date);
    do {
        nextDate.setDate(nextDate.getDate() + 1);
    } while (!isBusinessDay(nextDate));
    return nextDate;
}

/**
 * Calculates the number of business days between two dates.
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {number} - The number of business days between the two dates.
 */
function calculateBusinessDays(startDate, endDate) {
    let count = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        if (isBusinessDay(currentDate)) count++;
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
}

// Exporteer de functies
module.exports = { 
    formatDate,
    addDays,
    isWeekend,
    toReadableString,
    convertTimeZone,
    timeAgo,
    timeUntil,
    getRecurringDates,
    isBusinessDay,
    getNextBusinessDay,
    calculateBusinessDays };