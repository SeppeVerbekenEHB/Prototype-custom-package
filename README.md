# chronos-helper
A lightweight and easy-to-use NPM toolkit for date manipulation tasks. Perform operations like formatting dates, adding days, checking weekends, converting time zones, add business days, and much more.

## Installation

Install the package via NPM:
```bash
npm install chronos-helper
```

## Usage

```javascript
const { 
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
    calculateBusinessDays 
} = require('chronos-helper');

const date = new Date('2024-11-19');

// Format a date
console.log(formatDate(date, 'DD/MM/YYYY')); // "19/11/2024"

// Add days to a date
console.log(formatDate(addDays(date, 5), 'YYYY-MM-DD')); // "2024-11-24"

// Check if a date is a weekend
console.log(isWeekend(date)); // false

// Convert a date to a readable string
console.log(toReadableString(date)); // "19 November 2024"

// Convert time zones
const utcDate = new Date('2024-11-19T12:00:00Z');
console.log(convertTimeZone(utcDate, 'UTC', 'Europe/Brussels')); // Adjusted to Belgium time

// Check how long ago a date occurred
console.log(timeAgo(new Date('2024-11-15'))); // "4 days ago"

// Check how far a date is in the future
console.log(timeUntil(new Date('2024-11-25'))); // "6 days from now"

// Generate recurring dates
console.log(getRecurringDates(new Date('2024-11-01'), 'weekly', 3)); // Weekly dates for 3 occurrences

// Check if a date is a business day
console.log(isBusinessDay(date)); // true

// Get the next business day
console.log(getNextBusinessDay(new Date('2024-11-23'))); // "2024-11-25" (Monday)

// Calculate business days between two dates
console.log(calculateBusinessDays(new Date('2024-11-01'), new Date('2024-11-10'))); // 6 business days

```

## Features
<br>

### `formatDate(date, format)`
Formats a JavaScript `Date` object into a specified string format.

- **Parameters**:
  - `date`: A JavaScript `Date` object.
  - `format`: The desired format string, e.g., `'YYYY-MM-DD'` or `'DD/MM/YYYY'`.
- **Returns**: A formatted date string.

**Example**
```javascript
formatDate(new Date('2024-11-19'), 'YYYY-MM-DD'); // "2024-11-19"
formatDate(new Date('2024-11-19'), 'DD/MM/YYYY'); // "19/11/2024"
```
<br><br>

### `addDays(date,days)`
Adds a specified number of days to a JavaScript `Date` objet.
- **Parameters**;
  - `date`: A JavaScript `Date` object
  - `days`: The number of days to add (can be negative to subtract days).
- **Returns**: A new `Date` object with the updated date.

**Example**:
```javascript
addDays(new Date('2024-11-19'), 5); // "2024-11-24"
```
<br><br>

### `isWeekend(date)`
Checks if a given date falls on a weekend (Saturday or Sunday)

- **Parameters**:
  - `date`: A JavaScript `Date` object.
- **Returns**: `true` if the date is a weekend, otherwise `false`.

**Example**:
```javascript
isWeekend(new Date('2024-11-23')); // true (Saturday)
isWeekend(new Date('2024-11-19')); // false (Tuesday)
```
<br><br>

### `toReadableString(date)`
Converts a JavaScript `Date` object into a human-readable string.

- **Parameters**:
  - `date`: A JavaScript `Date` object.
- **Returns**: A string in the format `"DD Month YYYY"`, e.g., `"19 November 2024"`.

**Example**:
```javascript
toReadableString(new Date('2024-11-19')); // "19 November 2024"
```
<br><br>

### `convertTimeZone(date, fromZone, toZone)`
Converts a `Date` from one time zone to another.

- **Parameters**:
  - `date`: A JavaScript `Date` object.
  - `fromZone`: The source time zone (e.g., `'UTC'`).
  - `toZone`: The target time zone (e.g., `'Europe/Brussels'`).
- **Returns**: A new `Date` object in the target time zone.

**Example**:
```javascript
convertTimeZone(new Date('2024-11-19T12:00:00Z'), 'UTC', 'Europe/Brussels');
```
<br><br>

### `timeAgo(date)`
Calculates how long ago a given date occurred relative to now.

- **Parameters**:
  - `date`: A JavaScript `Date` object.
- **Returns**: A human-readable string like `"2 days ago"`.

**Example**:
```javascript
timeAgo(new Date('2024-11-15')); // "4 days ago"
```
<br><br>

### `timeAgo(date)`
Calculates how far a date is in the future relative to now.

- **Parameters**:
  - `date`: A JavaScript `Date` object.
- **Returns**: A human-readable string like `"3 days from now"`.

**Example**:
```javascript
timeUntil(new Date('2024-11-25')); // "6 days from now"
```
<br><br>

### `getRecurringDates(startDate, frequency, occurrences)`
Generates recurring dates based on a starting date and frequency.

- **Parameters**:
  - `startDate`: A JavaScript `Date` object.
  - `frequency`: `'daily'`, `'weekly'`, `'monthly'`, or `'yearly'`.
  - `occurrences`: The number of occurrences to generate.
- **Returns**: An array of `Date` objects.

**Example**:
```javascript
getRecurringDates(new Date('2024-11-01'), 'weekly', 3); // Recurring weekly dates
```
<br><br>

### `isBusinessDay(date)`
Checks if a given date falls on a business day (Monday to Friday).

**Example**:
```javascript
isBusinessDay(new Date('2024-11-19')); // true
```
<br><br>

### `getNextBusinessDay(date)`
Finds the next business day after a given date.

**Example**:
```javascript
getNextBusinessDay(new Date('2024-11-23')); // Monday, 2024-11-25
```
<br><br>

### `calculateBusinessDays(startDate, endDate)`
Calculates the number of business days between two dates.

**Example**:
```javascript
calculateBusinessDays(new Date('2024-11-01'), new Date('2024-11-10')); // 6
```
<br><br>

## Testing

This package uses Jest for unit tests. Run the tests using:
```bash
npm test
```

## License

This project is licensed under the MIT License