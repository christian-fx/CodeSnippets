/**
 * Currency Formatter Utility
 * 
 * A robust engine for formatting prices across different currencies with support
 * for conversion rates and compact notation (K, M, B).
 */

import map from "CURRENCY_MAP.js";

/**
 * Format a price based on currency configuration
 * @param {number|string} amount - The numeric value to format
 * @param {string} currencyName - Key from CURRENCY_MAP
 * @param {boolean} useSymbol - Whether to force the custom symbol over the Intl default
 * @returns {string} - Formatted price string
 */
export const formatPrice = (amount, currencyName = 'United States Dollar (USD)', useSymbol = true) => {
  if (amount === undefined || amount === null || amount === '') return '—';
  
  // Robustly handle strings with symbols or commas (e.g. "$1,200")
  let cleanAmount = amount;
  if (typeof amount === 'string') {
    cleanAmount = parseFloat(amount.replace(/[^0-9.-]/g, ''));
  }

  if (isNaN(cleanAmount)) return '—';

  const config = map[currencyName] || map['United States Dollar (USD)'];
  const convertedAmount = cleanAmount * config.rate;

  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: config.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedAmount);

  // If useSymbol is true, we ensure our custom symbol is used (useful if Intl doesn't match preferences)
  return useSymbol ? formatted.replace(config.code, config.symbol) : formatted;
};

/**
 * Shorthand formatter for charts and dashboards (K, M, B)
 * @param {number} value - The numeric value
 * @param {string} currencyName - Key from CURRENCY_MAP
 */
export const formatCompactPrice = (value, currencyName = 'United States Dollar (USD)') => {
  if (!value && value !== 0) return '—';
  
  const config = map[currencyName] || CURRENCY_MAP['United States Dollar (USD)'];
  const converted = value * config.rate;

  const symbol = config.symbol;

  if (converted >= 1_000_000_000) return `${symbol}${(converted / 1_000_000_000).toFixed(1)}B`;
  if (converted >= 1_000_000) return `${symbol}${(converted / 1_000_000).toFixed(1)}M`;
  if (converted >= 1_000) return `${symbol}${(converted / 1_000).toFixed(0)}K`;
  
  return `${symbol}${Math.round(converted)}`;
};

export default map;
