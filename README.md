# Prototype-custom-package
A lightweight NPM toolkit for date manipulation tasks.

## Installation

Install the package via NPM:
```bash
npm install date-utils
```

## Usage

```javascript
const { formatDate, addDays, isWeekend, toReadableString } = require('date-utils');

const date = new Date('2024-11-19');

// Format a date
console.log(formatDate(date, 'DD/MM/YYYY')); // "19/11/2024"

// Add days to a date
console.log(formatDate(addDays(date, 5), 'YYYY-MM-DD')); // "2024-11-24"

// Check if a date is a weekend
console.log(isWeekend(date)); // false

// Convert a date to a readable string
console.log(toReadableString(date)); // "19 November 2024"
```

## Features

1. `formatDate(date, format)`
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

2. `addDays(date,days)`
Adds a specified number of days to a JavaScript `Date` objet.
- **Parameters**;
  - `date`: A JavaScript `Date` object
  - `days`: The number of days to add (can be negative to subtract days).
- **Returns**: A new `Date` object with the updated date.

**Example**:
```javascript
addDays(new Date('2024-11-19'), 5); // "2024-11-24"
```

3. isWeekend(date)
Checks if a given date falls on a weekend (Saturday or Sunday)

- **Parameters**:
  - `date`: A JavaScript `Date` object.
- **Returns**: `true` if the date is a weekend, otherwise `false`.

**Example**:
```javascript
isWeekend(new Date('2024-11-23')); // true (Saturday)
isWeekend(new Date('2024-11-19')); // false (Tuesday)
```

4. `toReadableString(date)`
Converts a JavaScript `Date` object into a human-readable string.

- **Parameters**:
  - `date`: A JavaScript `Date` object.
- **Returns**: A string in the format `"DD Month YYYY"`, e.g., `"19 November 2024"`.

**Example**:
```javascript
toReadableString(new Date('2024-11-19')); // "19 November 2024"
```

## Testing

This package uses Jest for unit tests. Run the tests using:
```bash
npm test
```

## License

This project is licensed under the MIT License