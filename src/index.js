/**
 * Formatteert een datum in een opgegeven formaat
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
 * Voegt dagen toe aan een datum
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
 * Controleert of een datum in het weekend valt
 * @param {Date} date - De datum
 * @returns {boolean} True als het weekend is, anders false
 */
function isWeekend(date) {
    const day = date.getDay(); // 0 = zondag, 6 = zaterdag
    return day === 0 || day === 6;
}

/**
 * Converteert een datum naar een leesbare string
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

// Exporteer de functies
module.exports = { formatDate, addDays, isWeekend, toReadableString };
