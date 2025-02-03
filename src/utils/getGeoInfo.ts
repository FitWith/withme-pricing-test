export interface GeoCurrency {
  code: 'AUD' | 'CAD' | 'EUR' | 'SEK' | 'USD' | 'GBP';
  symbol: '$' | '€' | 'kr' | '£';
}

export default function getGeoInfo(): GeoCurrency {
  let currency: GeoCurrency['code'] = 'USD';

  try {
    const location: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (location.startsWith('Europe/')) {
      if (location === 'Europe/London') {
        currency = 'GBP';
      } else if (location === 'Europe/Stockholm') {
        currency = 'SEK';
      } else {
        currency = 'EUR';
      }
    } else if (location.startsWith('America/')) {
      currency = ['America/Toronto', 'America/Vancouver', 'America/Montreal', 'America/Edmonton', 'America/Winnipeg'].includes(location)
        ? 'CAD'
        : 'USD';
    } else if (location.startsWith('Australia/')) {
      currency = 'AUD';
    }
  } catch (error) {
    console.error('Currency detection failed:', error);
  }

  const currencySymbols: Record<GeoCurrency['code'], GeoCurrency['symbol']> = {
    USD: '$',
    EUR: '€',
    SEK: 'kr',
    CAD: '$',
    AUD: '$',
    GBP: '£',
  };

  return { code: currency, symbol: currencySymbols[currency] };
}
