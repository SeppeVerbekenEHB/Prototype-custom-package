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
    calculateBusinessDays,
} = require('../src/index');

// Test for formatDate
test('formatDate should format a date correctly', () => {
    const date = new Date('2024-11-19');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-11-19');
    expect(formatDate(date, 'DD/MM/YYYY')).toBe('19/11/2024');
});

// Test for addDays
test('addDays should add days to a date', () => {
    const date = new Date('2024-11-19');
    const newDate = addDays(date, 5);
    expect(formatDate(newDate, 'YYYY-MM-DD')).toBe('2024-11-24');
});

// Test for isWeekend
test('isWeekend should correctly identify weekends', () => {
    const saturday = new Date('2024-11-23');
    const monday = new Date('2024-11-25');
    expect(isWeekend(saturday)).toBe(true);
    expect(isWeekend(monday)).toBe(false);
});

// Test for toReadableString
test('toReadableString should convert a date to a readable string', () => {
    const date = new Date('2024-11-19');
    expect(toReadableString(date)).toBe('19 november 2024');
});

// Test for convertTimeZone
test('convertTimeZone should handle DST and non-DST time zones correctly', () => {
    const winterDate = new Date('2024-01-15T12:00:00Z'); // Winter (CET, UTC+1)
    const summerDate = new Date('2024-07-15T12:00:00Z'); // Summer (CEST, UTC+2)

    // test for Brussels timezone
    const winterConverted = convertTimeZone(winterDate, 'Europe/Brussels');
    const summerConverted = convertTimeZone(summerDate, 'Europe/Brussels');

    //test for America/New_York timezone
    const winterConvertedNY = convertTimeZone(winterDate, 'America/New_York');
    const summerConvertedNY = convertTimeZone(summerDate, 'America/New_York');


    // Winter
    expect(winterConverted.getHours()).toBe(13);
    expect(winterConvertedNY.getHours()).toBe(7);

    // Summer
    expect(summerConverted.getHours()).toBe(14);
    expect(summerConvertedNY.getHours()).toBe(8);
});


// Test for timeAgo
test('timeAgo should calculate time ago correctly', () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 2); // 2 days ago
    expect(timeAgo(pastDate)).toBe('2 day(s) ago');
});

// Test for timeUntil
test('timeUntil should calculate time until correctly', () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3); // 3 days from now
    expect(timeUntil(futureDate)).toBe('3 day(s) from now');
});

// Test for getRecurringDates
test('getRecurringDates should generate recurring dates correctly', () => {
    const startDate = new Date('2024-11-19');
    const occurrences = getRecurringDates(startDate, 'daily', 3);
    expect(occurrences.map(date => formatDate(date, 'YYYY-MM-DD'))).toEqual([
        '2024-11-19',
        '2024-11-20',
        '2024-11-21',
    ]);
});

// Test for isBusinessDay
test('isBusinessDay should correctly identify business days', () => {
    const monday = new Date('2024-11-25');
    const saturday = new Date('2024-11-23');
    expect(isBusinessDay(monday)).toBe(true);
    expect(isBusinessDay(saturday)).toBe(false);
});

// Test for getNextBusinessDay
test('getNextBusinessDay should find the next business day', () => {
    const friday = new Date('2024-11-22');
    const nextBusinessDay = getNextBusinessDay(friday);
    expect(formatDate(nextBusinessDay, 'YYYY-MM-DD')).toBe('2024-11-25'); // Monday
});

// Test for calculateBusinessDays
test('calculateBusinessDays should count business days between two dates', () => {
    const startDate = new Date('2024-11-20');
    const endDate = new Date('2024-11-27');
    expect(calculateBusinessDays(startDate, endDate)).toBe(6); // Skipping weekend
});
