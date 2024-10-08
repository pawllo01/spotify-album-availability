const fs = require('fs');

const SPOTIFY_MARKETS = [
  'AD',
  'AE',
  'AG',
  'AL',
  'AM',
  'AO',
  'AR',
  'AT',
  'AU',
  'AZ',
  'BA',
  'BB',
  'BD',
  'BE',
  'BF',
  'BG',
  'BH',
  'BI',
  'BJ',
  'BN',
  'BO',
  'BR',
  'BS',
  'BT',
  'BW',
  'BY',
  'BZ',
  'CA',
  'CD',
  'CG',
  'CH',
  'CI',
  'CL',
  'CM',
  'CO',
  'CR',
  'CV',
  'CW',
  'CY',
  'CZ',
  'DE',
  'DJ',
  'DK',
  'DM',
  'DO',
  'DZ',
  'EC',
  'EE',
  'EG',
  'ES',
  'ET',
  'FI',
  'FJ',
  'FM',
  'FR',
  'GA',
  'GB',
  'GD',
  'GE',
  'GH',
  'GM',
  'GN',
  'GQ',
  'GR',
  'GT',
  'GW',
  'GY',
  'HK',
  'HN',
  'HR',
  'HT',
  'HU',
  'ID',
  'IE',
  'IL',
  'IN',
  'IQ',
  'IS',
  'IT',
  'JM',
  'JO',
  'JP',
  'KE',
  'KG',
  'KH',
  'KI',
  'KM',
  'KN',
  'KR',
  'KW',
  'KZ',
  'LA',
  'LB',
  'LC',
  'LI',
  'LK',
  'LR',
  'LS',
  'LT',
  'LU',
  'LV',
  'LY',
  'MA',
  'MC',
  'MD',
  'ME',
  'MG',
  'MH',
  'MK',
  'ML',
  'MN',
  'MO',
  'MR',
  'MT',
  'MU',
  'MV',
  'MW',
  'MX',
  'MY',
  'MZ',
  'NA',
  'NE',
  'NG',
  'NI',
  'NL',
  'NO',
  'NP',
  'NR',
  'NZ',
  'OM',
  'PA',
  'PE',
  'PG',
  'PH',
  'PK',
  'PL',
  'PR',
  'PS',
  'PT',
  'PW',
  'PY',
  'QA',
  'RO',
  'RS',
  'RW',
  'SA',
  'SB',
  'SC',
  'SE',
  'SG',
  'SI',
  'SK',
  'SL',
  'SM',
  'SN',
  'SR',
  'ST',
  'SV',
  'SZ',
  'TD',
  'TG',
  'TH',
  'TJ',
  'TL',
  'TN',
  'TO',
  'TR',
  'TT',
  'TV',
  'TW',
  'TZ',
  'UA',
  'UG',
  'US',
  'UY',
  'UZ',
  'VC',
  'VE',
  'VN',
  'VU',
  'WS',
  'XK',
  'ZA',
  'ZM',
  'ZW',
];

// https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes
getCountries();

async function getCountries() {
  const res = await fetch(
    'https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json'
  );
  const countries = await res.json();

  let filteredCountries = countries.filter((country) =>
    SPOTIFY_MARKETS.includes(country['alpha-2'])
  );
  filteredCountries.push({ name: 'Kosovo', 'alpha-2': 'XK' });

  const sortedCountries = filteredCountries.sort((a, b) => {
    if (a['alpha-2'] > b['alpha-2']) return 1;
    if (a['alpha-2'] < b['alpha-2']) return -1;
    return 0;
  });

  let myCountries = {};

  for (const country of sortedCountries) {
    myCountries[country['alpha-2']] = country.name;
  }

  fs.writeFileSync('./countries.json', JSON.stringify(myCountries, null, 2));
}
