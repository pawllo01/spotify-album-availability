// ==UserScript==
// @name         Spotify Album Availability
// @namespace    https://github.com/pawllo01/spotify-album-availability
// @version      1.0
// @description  Show in which countries the album is available and in which it is unavailable.
// @author       pawllo01
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @grant        none
// ==/UserScript==

(async function () {
  'use strict';

  const YOUR_COUNTRY_CODE = '';

  const COUNTRIES = {
    AD: 'Andorra',
    AE: 'United Arab Emirates',
    AG: 'Antigua and Barbuda',
    AL: 'Albania',
    AM: 'Armenia',
    AO: 'Angola',
    AR: 'Argentina',
    AT: 'Austria',
    AU: 'Australia',
    AZ: 'Azerbaijan',
    BA: 'Bosnia and Herzegovina',
    BB: 'Barbados',
    BD: 'Bangladesh',
    BE: 'Belgium',
    BF: 'Burkina Faso',
    BG: 'Bulgaria',
    BH: 'Bahrain',
    BI: 'Burundi',
    BJ: 'Benin',
    BN: 'Brunei Darussalam',
    BO: 'Bolivia, Plurinational State of',
    BR: 'Brazil',
    BS: 'Bahamas',
    BT: 'Bhutan',
    BW: 'Botswana',
    BY: 'Belarus',
    BZ: 'Belize',
    CA: 'Canada',
    CD: 'Congo, Democratic Republic of the',
    CG: 'Congo',
    CH: 'Switzerland',
    CI: "Côte d'Ivoire",
    CL: 'Chile',
    CM: 'Cameroon',
    CO: 'Colombia',
    CR: 'Costa Rica',
    CV: 'Cabo Verde',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czechia',
    DE: 'Germany',
    DJ: 'Djibouti',
    DK: 'Denmark',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    DZ: 'Algeria',
    EC: 'Ecuador',
    EE: 'Estonia',
    EG: 'Egypt',
    ES: 'Spain',
    ET: 'Ethiopia',
    FI: 'Finland',
    FJ: 'Fiji',
    FM: 'Micronesia, Federated States of',
    FR: 'France',
    GA: 'Gabon',
    GB: 'United Kingdom of Great Britain and Northern Ireland',
    GD: 'Grenada',
    GE: 'Georgia',
    GH: 'Ghana',
    GM: 'Gambia',
    GN: 'Guinea',
    GQ: 'Equatorial Guinea',
    GR: 'Greece',
    GT: 'Guatemala',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HK: 'Hong Kong',
    HN: 'Honduras',
    HR: 'Croatia',
    HT: 'Haiti',
    HU: 'Hungary',
    ID: 'Indonesia',
    IE: 'Ireland',
    IL: 'Israel',
    IN: 'India',
    IQ: 'Iraq',
    IS: 'Iceland',
    IT: 'Italy',
    JM: 'Jamaica',
    JO: 'Jordan',
    JP: 'Japan',
    KE: 'Kenya',
    KG: 'Kyrgyzstan',
    KH: 'Cambodia',
    KI: 'Kiribati',
    KM: 'Comoros',
    KN: 'Saint Kitts and Nevis',
    KR: 'Korea, Republic of',
    KW: 'Kuwait',
    KZ: 'Kazakhstan',
    LA: "Lao People's Democratic Republic",
    LB: 'Lebanon',
    LC: 'Saint Lucia',
    LI: 'Liechtenstein',
    LK: 'Sri Lanka',
    LR: 'Liberia',
    LS: 'Lesotho',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    LV: 'Latvia',
    LY: 'Libya',
    MA: 'Morocco',
    MC: 'Monaco',
    MD: 'Moldova, Republic of',
    ME: 'Montenegro',
    MG: 'Madagascar',
    MH: 'Marshall Islands',
    MK: 'North Macedonia',
    ML: 'Mali',
    MN: 'Mongolia',
    MO: 'Macao',
    MR: 'Mauritania',
    MT: 'Malta',
    MU: 'Mauritius',
    MV: 'Maldives',
    MW: 'Malawi',
    MX: 'Mexico',
    MY: 'Malaysia',
    MZ: 'Mozambique',
    NA: 'Namibia',
    NE: 'Niger',
    NG: 'Nigeria',
    NI: 'Nicaragua',
    NL: 'Netherlands, Kingdom of the',
    NO: 'Norway',
    NP: 'Nepal',
    NR: 'Nauru',
    NZ: 'New Zealand',
    OM: 'Oman',
    PA: 'Panama',
    PE: 'Peru',
    PG: 'Papua New Guinea',
    PH: 'Philippines',
    PK: 'Pakistan',
    PL: 'Poland',
    PR: 'Puerto Rico',
    PS: 'Palestine, State of',
    PT: 'Portugal',
    PW: 'Palau',
    PY: 'Paraguay',
    QA: 'Qatar',
    RO: 'Romania',
    RS: 'Serbia',
    RW: 'Rwanda',
    SA: 'Saudi Arabia',
    SB: 'Solomon Islands',
    SC: 'Seychelles',
    SE: 'Sweden',
    SG: 'Singapore',
    SI: 'Slovenia',
    SK: 'Slovakia',
    SL: 'Sierra Leone',
    SM: 'San Marino',
    SN: 'Senegal',
    SR: 'Suriname',
    ST: 'Sao Tome and Principe',
    SV: 'El Salvador',
    SZ: 'Eswatini',
    TD: 'Chad',
    TG: 'Togo',
    TH: 'Thailand',
    TJ: 'Tajikistan',
    TL: 'Timor-Leste',
    TN: 'Tunisia',
    TO: 'Tonga',
    TR: 'Türkiye',
    TT: 'Trinidad and Tobago',
    TV: 'Tuvalu',
    TW: 'Taiwan, Province of China',
    TZ: 'Tanzania, United Republic of',
    UA: 'Ukraine',
    UG: 'Uganda',
    US: 'United States of America',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VC: 'Saint Vincent and the Grenadines',
    VE: 'Venezuela, Bolivarian Republic of',
    VN: 'Viet Nam',
    VU: 'Vanuatu',
    WS: 'Samoa',
    XK: 'Kosovo',
    ZA: 'South Africa',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
  };

  // add GeoChart script
  const geoChartScript = document.createElement('script');
  geoChartScript.src = 'https://www.gstatic.com/charts/loader.js';
  document.head.append(geoChartScript);

  // get access token
  const token = await getToken();
  if (!token) return;

  // observe URL change
  // https://stackoverflow.com/questions/53303519/detect-an-url-change-in-a-spa
  let previousUrl = '';
  const observer = new MutationObserver(() => {
    if (location.href !== previousUrl) {
      previousUrl = location.href;
      app();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  async function app() {
    if (location.pathname.includes('/album/')) {
      const albumId = location.pathname.split('/')[2];
      const albumData = await getAlbumData(albumId);
      if (!albumData) return;
      const albumCountries = getAlbumCountries(albumData);
      const avalabilityElement = createAvailabilityElement(albumCountries);

      // embed data
      const intervalId = setInterval(() => {
        const albumContainer = document.querySelector('section[data-testid="album-page"]');
        console.log('waiting for the albumContainer...');

        if (albumContainer) {
          clearInterval(intervalId);

          // label & upc
          document.querySelector('div.rTMkDBDp47Eo12ZEQv4U').insertAdjacentHTML(
            'beforeend',
            `<p dir="auto" data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">Label: ${albumData?.label}</p>
             <p dir="auto" data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">UPC: ${albumData?.external_ids?.upc}</p>`
          );

          // tempDiv
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = avalabilityElement;
          const avalabilityElementNode = tempDiv.querySelector('div');

          // album availability
          albumContainer.insertBefore(avalabilityElementNode, albumContainer.children[4]);
          embedGeoChart(albumCountries, albumContainer);
        }
      }, 200);
    }
  }

  async function getAlbumData(albumId) {
    try {
      const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}?access_token=${token}`);
      const data = await res.json();

      if (data.error) throw data.error;

      return data;
    } catch (error) {
      console.error(`Spotify Album Availability: ${error.message}. Refresh the page.`);
      return null;
    }
  }

  function getAlbumCountries(albumData) {
    const availableCountries = albumData.available_markets;

    const unavailableCountries = Object.keys(COUNTRIES).filter(
      (country) => !availableCountries.includes(country)
    );

    return { availableCountries, unavailableCountries };
  }

  function createAvailabilityElement(albumCountries) {
    const countriesStyle = objectStyleToString({
      'font-family': 'monospace',
      'font-size': '0.9rem',
      color: 'inherit',
    });
    const highlightStyle = objectStyleToString({
      'background-color': '#ffff00',
      color: 'black',
    });

    const createCountryList = (title, countries) => {
      const countrySpans = countries.map((country) => {
        const highlight =
          country === YOUR_COUNTRY_CODE.toUpperCase() ? `style="${highlightStyle}"` : '';

        return `<span title="${COUNTRIES[country]}" ${highlight}>${country}</span>`;
      });

      return `
        <div style="margin:8px 0">
          <p class="encore-internal-color-text-base">${title} (${countries.length}):</p>
          <div style="${countriesStyle}">${countrySpans.join(', ')}</div>
        </div>`;
    };

    return `
      <div class="contentSpacing">
        <h2 class="encore-text encore-text-title-small encore-internal-color-text-base ListRowTitle__ListRowText-sc-1xe2if1-1 eFGzcP KpzkVLd9fh2ZrKqZoFg5 UlehPmBIEi_jcHtJ7hzo HvUDqar3bHYPh54F2NIA">Album Availability</h2>
        ${createCountryList('Available in', albumCountries.availableCountries)}
        ${createCountryList('Unavailable in', albumCountries.unavailableCountries)}
      </div>`;
  }

  function objectStyleToString(style) {
    return Object.entries(style)
      .map(([key, value]) => `${key}:${value};`)
      .join(' ');
  }

  // https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=en
  function embedGeoChart(albumCountries, albumContainer) {
    google.charts.load('current', { packages: ['geochart'] });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      const data = google.visualization.arrayToDataTable([
        ['Country ISO', 'Country Name', { role: 'tooltip' }],
        ...Object.entries(COUNTRIES).map(([iso, name]) => [
          iso,
          albumCountries.unavailableCountries.includes(iso) ? 0 : 1,
          `${name} ${albumCountries.unavailableCountries.includes(iso) ? '❌' : '✅'}`,
        ]),
      ]);

      const colors =
        albumCountries.availableCountries.length === 0
          ? ['#df3c3c'] // red
          : ['#df3c3c', '#00b23d']; // red, green

      const options = {
        colorAxis: { colors },
        backgroundColor: 'transparent',
        datalessRegionColor: '#1f1f1f',
        legend: 'none',
      };

      const geoChart = document.createElement('div');
      geoChart.style.width = '95%';
      geoChart.style.margin = '0 auto';
      albumContainer.children[4].append(geoChart);

      const chart = new google.visualization.GeoChart(geoChart);

      chart.draw(data, options);
    }
  }

  async function getToken() {
    try {
      const res = await fetch('https://open.spotify.com/');
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');

      const session = doc.querySelector('#session');
      const sessionData = JSON.parse(session.textContent);

      return sessionData.accessToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
})();
