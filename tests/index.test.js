const { formatDate, addDays, isWeekend, toReadableString } = require('../src/index');

test('formatDate should format a date correctly', () => {
    const date = new Date('2024-11-19');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-11-19');
    expect(formatDate(date, 'DD/MM/YYYY')).toBe('19/11/2024');
});

test('addDays should add days to a date', () => {
    const date = new Date('2024-11-19');
    const newDate = addDays(date, 5);
    expect(formatDate(newDate, 'YYYY-MM-DD')).toBe('2024-11-24');
});

test('isWeekend should correctly identify weekends', () => {
    const saturday = new Date('2024-11-23');
    const monday = new Date('2024-11-25');
    expect(isWeekend(saturday)).toBe(true);
    expect(isWeekend(monday)).toBe(false);
});

test('toReadableString should convert a date to a readable string', () => {
    const date = new Date('2024-11-19');
    expect(toReadableString(date)).toBe('19 november 2024');
});
