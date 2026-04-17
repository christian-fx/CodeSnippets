# Flexible Currency Formatter (JS)

A robust utility for formatting prices across multiple currencies with support for conversion rates and dashboard-friendly compact notation (e.g., $1.2M, $500K).

## Files

- `currencyFormatter.js`

## Dependencies

- None (Uses native browser `Intl.NumberFormat`)

## Features

- **Multi-Currency Support**: Pre-configured for USD, EUR, GBP, JPY, and NGN.
- **Intl.NumberFormat**: Uses the native browser API for localized currency formatting.
- **Compact Notation**: Specialized formatter for charts/dashboards to simplify large numbers.
- **String Sanitization**: Automatically handles string inputs containing currency symbols or commas.
- **Custom Symbols**: Option to override default `Intl` currency symbols.

## How to Use

### Standard Formatting

```javascript
import { formatPrice } from './currencyFormatter';

// Default (USD)
console.log(formatPrice(1200.50)); // "$1,200.50"

// Specific Currency
console.log(formatPrice(500, 'Euro (EUR)')); // "€460.00" (at 0.92 rate)

// From string input
console.log(formatPrice("$2,500.00", 'British Pound (GBP)')); // "£1,975.00"
```

### Compact Formatting (Dashboards)

```javascript
import { formatCompactPrice } from './currencyFormatter';

console.log(formatCompactPrice(1500000)); // "$1.5M"
console.log(formatCompactPrice(5000));    // "$5K"
console.log(formatCompactPrice(950));     // "$950"
```

## Adding Custom Currencies

You can easily extend the `CURRENCY_MAP` to include your own conversion rates or regions:

```javascript
const CURRENCY_MAP = {
  // ... existing
  'Canadian Dollar (CAD)': { symbol: 'C$', code: 'CAD', rate: 1.35 }
};
```

## Live API Integration

For real-time conversion rates, you can replace the static `rate` values with data from an external API:

```javascript
// Example: update rates from an API
async function updateRates() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const data = await response.json();
  
  Object.keys(CURRENCY_MAP).forEach(name => {
    const code = CURRENCY_MAP[name].code;
    if (data.rates[code]) {
      CURRENCY_MAP[name].rate = data.rates[code];
    }
  });
}
```

## Notes

- The current conversion rates are static snapshots and should be updated for production use.
- Uses `en-US` locale by default for consistent decimal/comma placement.
