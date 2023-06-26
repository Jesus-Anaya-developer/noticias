import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionador = new EventEmitter<any>();

  categoriaSeleccionada = 'technology';
  paisSeleccionado = 'US';

  paises: any[] = [
    {
      value: 'Afghanistan',
      nombre: 'AF'
    },
    {
      value: 'Albania',
      nombre: 'AL'
    },
    {
      value: 'Algeria',
      nombre: 'DZ'
    },
    {
      value: 'American Samoa',
      nombre: 'AS'
    },
    {
      value: 'Andorra',
      nombre: 'AD'
    },
    {
      value: 'Angola',
      nombre: 'AO'
    },
    {
      value: 'Anguilla',
      nombre: 'AI'
    },
    {
      value: 'Antarctica',
      nombre: 'AQ'
    },
    {
      value: 'Antigua and Barbuda',
      nombre: 'AG'
    },
    {
      value: 'Argentina',
      nombre: 'AR'
    },
    {
      value: 'Armenia',
      nombre: 'AM'
    },
    {
      value: 'Aruba',
      nombre: 'AW'
    },
    {
      value: 'Australia',
      nombre: 'AU'
    },
    {
      value: 'Austria',
      nombre: 'AT'
    },
    {
      value: 'Azerbaijan',
      nombre: 'AZ'
    },
    {
      value: 'Bahamas (the)',
      nombre: 'BS'
    },
    {
      value: 'Bahrain',
      nombre: 'BH'
    },
    {
      value: 'Bangladesh',
      nombre: 'BD'
    },
    {
      value: 'Barbados',
      nombre: 'BB'
    },
    {
      value: 'Belarus',
      nombre: 'BY'
    },
    {
      value: 'Belgium',
      nombre: 'BE'
    },
    {
      value: 'Belize',
      nombre: 'BZ'
    },
    {
      value: 'Benin',
      nombre: 'BJ'
    },
    {
      value: 'Bermuda',
      nombre: 'BM'
    },
    {
      value: 'Bhutan',
      nombre: 'BT'
    },
    {
      value: 'Bolivia (Plurinational State of)',
      nombre: 'BO'
    },
    {
      value: 'Bonaire, Sint Eustatius and Saba',
      nombre: 'BQ'
    },
    {
      value: 'Bosnia and Herzegovina',
      nombre: 'BA'
    },
    {
      value: 'Botswana',
      nombre: 'BW'
    },
    {
      value: 'Bouvet Island',
      nombre: 'BV'
    },
    {
      value: 'Brazil',
      nombre: 'BR'
    },
    {
      value: 'British Indian Ocean Territory (the)',
      nombre: 'IO'
    },
    {
      value: 'Brunei Darussalam',
      nombre: 'BN'
    },
    {
      value: 'Bulgaria',
      nombre: 'BG'
    },
    {
      value: 'Burkina Faso',
      nombre: 'BF'
    },
    {
      value: 'Burundi',
      nombre: 'BI'
    },
    {
      value: 'Cabo Verde',
      nombre: 'CV'
    },
    {
      value: 'Cambodia',
      nombre: 'KH'
    },
    {
      value: 'Cameroon',
      nombre: 'CM'
    },
    {
      value: 'Canada',
      nombre: 'CA'
    },
    {
      value: 'Cayman Islands (the)',
      nombre: 'KY'
    },
    {
      value: 'Central African Republic (the)',
      nombre: 'CF'
    },
    {
      value: 'Chad',
      nombre: 'TD'
    },
    {
      value: 'Chile',
      nombre: 'CL'
    },
    {
      value: 'China',
      nombre: 'CN'
    },
    {
      value: 'Christmas Island',
      nombre: 'CX'
    },
    {
      value: 'Cocos (Keeling) Islands (the)',
      nombre: 'CC'
    },
    {
      value: 'Colombia',
      nombre: 'CO'
    },
    {
      value: 'Comoros (the)',
      nombre: 'KM'
    },
    {
      value: 'Congo (the Democratic Republic of the)',
      nombre: 'CD'
    },
    {
      value: 'Congo (the)',
      nombre: 'CG'
    },
    {
      value: 'Cook Islands (the)',
      nombre: 'CK'
    },
    {
      value: 'Costa Rica',
      nombre: 'CR'
    },
    {
      value: 'Croatia',
      nombre: 'HR'
    },
    {
      value: 'Cuba',
      nombre: 'CU'
    },
    {
      value: 'Curaçao',
      nombre: 'CW'
    },
    {
      value: 'Cyprus',
      nombre: 'CY'
    },
    {
      value: 'Czechia',
      nombre: 'CZ'
    },
    {
      value: 'Côte dIvoire',
      nombre: 'CI'
    },
    {
      value: 'Denmark',
      nombre: 'DK'
    },
    {
      value: 'Djibouti',
      nombre: 'DJ'
    },
    {
      value: 'Dominica',
      nombre: 'DM'
    },
    {
      value: 'Dominican Republic (the)',
      nombre: 'DO'
    },
    {
      value: 'Ecuador',
      nombre: 'EC'
    },
    {
      value: 'Egypt',
      nombre: 'EG'
    },
    {
      value: 'El Salvador',
      nombre: 'SV'
    },
    {
      value: 'Equatorial Guinea',
      nombre: 'GQ'
    },
    {
      value: 'Eritrea',
      nombre: 'ER'
    },
    {
      value: 'Estonia',
      nombre: 'EE'
    },
    {
      value: 'Eswatini',
      nombre: 'SZ'
    },
    {
      value: 'Ethiopia',
      nombre: 'ET'
    },
    {
      value: 'Falkland Islands (the) [Malvinas]',
      nombre: 'FK'
    },
    {
      value: 'Faroe Islands (the)',
      nombre: 'FO'
    },
    {
      value: 'Fiji',
      nombre: 'FJ'
    },
    {
      value: 'Finland',
      nombre: 'FI'
    },
    {
      value: 'France',
      nombre: 'FR'
    },
    {
      value: 'French Guiana',
      nombre: 'GF'
    },
    {
      value: 'French Polynesia',
      nombre: 'PF'
    },
    {
      value: 'French Southern Territories (the)',
      nombre: 'TF'
    },
    {
      value: 'Gabon',
      nombre: 'GA'
    },
    {
      value: 'Gambia (the)',
      nombre: 'GM'
    },
    {
      value: 'Georgia',
      nombre: 'GE'
    },
    {
      value: 'Germany',
      nombre: 'DE'
    },
    {
      value: 'Ghana',
      nombre: 'GH'
    },
    {
      value: 'Gibraltar',
      nombre: 'GI'
    },
    {
      value: 'Greece',
      nombre: 'GR'
    },
    {
      value: 'Greenland',
      nombre: 'GL'
    },
    {
      value: 'Grenada',
      nombre: 'GD'
    },
    {
      value: 'Guadeloupe',
      nombre: 'GP'
    },
    {
      value: 'Guam',
      nombre: 'GU'
    },
    {
      value: 'Guatemala',
      nombre: 'GT'
    },
    {
      value: 'Guernsey',
      nombre: 'GG'
    },
    {
      value: 'Guinea',
      nombre: 'GN'
    },
    {
      value: 'Guinea-Bissau',
      nombre: 'GW'
    },
    {
      value: 'Guyana',
      nombre: 'GY'
    },
    {
      value: 'Haiti',
      nombre: 'HT'
    },
    {
      value: 'Heard Island and McDonald Islands',
      nombre: 'HM'
    },
    {
      value: 'Holy See (the)',
      nombre: 'VA'
    },
    {
      value: 'Honduras',
      nombre: 'HN'
    },
    {
      value: 'Hong Kong',
      nombre: 'HK'
    },
    {
      value: 'Hungary',
      nombre: 'HU'
    },
    {
      value: 'Iceland',
      nombre: 'IS'
    },
    {
      value: 'India',
      nombre: 'IN'
    },
    {
      value: 'Indonesia',
      nombre: 'ID'
    },
    {
      value: 'Iran (Islamic Republic of)',
      nombre: 'IR'
    },
    {
      value: 'Iraq',
      nombre: 'IQ'
    },
    {
      value: 'Ireland',
      nombre: 'IE'
    },
    {
      value: 'Isle of Man',
      nombre: 'IM'
    },
    {
      value: 'Israel',
      nombre: 'IL'
    },
    {
      value: 'Italy',
      nombre: 'IT'
    },
    {
      value: 'Jamaica',
      nombre: 'JM'
    },
    {
      value: 'Japan',
      nombre: 'JP'
    },
    {
      value: 'Jersey',
      nombre: 'JE'
    },
    {
      value: 'Jordan',
      nombre: 'JO'
    },
    {
      value: 'Kazakhstan',
      nombre: 'KZ'
    },
    {
      value: 'Kenya',
      nombre: 'KE'
    },
    {
      value: 'Kiribati',
      nombre: 'KI'
    },
    {
      value: 'Korea (the Democratic Peoples Republic of)',
      nombre: 'KP'
    },
    {
      value: 'Korea (the Republic of)',
      nombre: 'KR'
    },
    {
      value: 'Kuwait',
      nombre: 'KW'
    },
    {
      value: 'Kyrgyzstan',
      nombre: 'KG'
    },
    {
      value: 'Lao Peoples Democratic Republic (the)',
      nombre: 'LA'
    },
    {
      value: 'Latvia',
      nombre: 'LV'
    },
    {
      value: 'Lebanon',
      nombre: 'LB'
    },
    {
      value: 'Lesotho',
      nombre: 'LS'
    },
    {
      value: 'Liberia',
      nombre: 'LR'
    },
    {
      value: 'Libya',
      nombre: 'LY'
    },
    {
      value: 'Liechtenstein',
      nombre: 'LI'
    },
    {
      value: 'Lithuania',
      nombre: 'LT'
    },
    {
      value: 'Luxembourg',
      nombre: 'LU'
    },
    {
      value: 'Macao',
      nombre: 'MO'
    },
    {
      value: 'Madagascar',
      nombre: 'MG'
    },
    {
      value: 'Malawi',
      nombre: 'MW'
    },
    {
      value: 'Malaysia',
      nombre: 'MY'
    },
    {
      value: 'Maldives',
      nombre: 'MV'
    },
    {
      value: 'Mali',
      nombre: 'ML'
    },
    {
      value: 'Malta',
      nombre: 'MT'
    },
    {
      value: 'Marshall Islands (the)',
      nombre: 'MH'
    },
    {
      value: 'Martinique',
      nombre: 'MQ'
    },
    {
      value: 'Mauritania',
      nombre: 'MR'
    },
    {
      value: 'Mauritius',
      nombre: 'MU'
    },
    {
      value: 'Mayotte',
      nombre: 'YT'
    },
    {
      value: 'Mexico',
      nombre: 'MX'
    },
    {
      value: 'Micronesia (Federated States of)',
      nombre: 'FM'
    },
    {
      value: 'Moldova (the Republic of)',
      nombre: 'MD'
    },
    {
      value: 'Monaco',
      nombre: 'MC'
    },
    {
      value: 'Mongolia',
      nombre: 'MN'
    },
    {
      value: 'Montenegro',
      nombre: 'ME'
    },
    {
      value: 'Montserrat',
      nombre: 'MS'
    },
    {
      value: 'Morocco',
      nombre: 'MA'
    },
    {
      value: 'Mozambique',
      nombre: 'MZ'
    },
    {
      value: 'Myanmar',
      nombre: 'MM'
    },
    {
      value: 'Namibia',
      nombre: 'NA'
    },
    {
      value: 'Nauru',
      nombre: 'NR'
    },
    {
      value: 'Nepal',
      nombre: 'NP'
    },
    {
      value: 'Netherlands (the)',
      nombre: 'NL'
    },
    {
      value: 'New Caledonia',
      nombre: 'NC'
    },
    {
      value: 'New Zealand',
      nombre: 'NZ'
    },
    {
      value: 'Nicaragua',
      nombre: 'NI'
    },
    {
      value: 'Niger (the)',
      nombre: 'NE'
    },
    {
      value: 'Nigeria',
      nombre: 'NG'
    },
    {
      value: 'Niue',
      nombre: 'NU'
    },
    {
      value: 'Norfolk Island',
      nombre: 'NF'
    },
    {
      value: 'Northern Mariana Islands (the)',
      nombre: 'MP'
    },
    {
      value: 'Norway',
      nombre: 'NO'
    },
    {
      value: 'Oman',
      nombre: 'OM'
    },
    {
      value: 'Pakistan',
      nombre: 'PK'
    },
    {
      value: 'Palau',
      nombre: 'PW'
    },
    {
      value: 'Palestine, State of',
      nombre: 'PS'
    },
    {
      value: 'Panama',
      nombre: 'PA'
    },
    {
      value: 'Papua New Guinea',
      nombre: 'PG'
    },
    {
      value: 'Paraguay',
      nombre: 'PY'
    },
    {
      value: 'Peru',
      nombre: 'PE'
    },
    {
      value: 'Philippines (the)',
      nombre: 'PH'
    },
    {
      value: 'Pitcairn',
      nombre: 'PN'
    },
    {
      value: 'Poland',
      nombre: 'PL'
    },
    {
      value: 'Portugal',
      nombre: 'PT'
    },
    {
      value: 'Puerto Rico',
      nombre: 'PR'
    },
    {
      value: 'Qatar',
      nombre: 'QA'
    },
    {
      value: 'Republic of North Macedonia',
      nombre: 'MK'
    },
    {
      value: 'Romania',
      nombre: 'RO'
    },
    {
      value: 'Russian Federation (the)',
      nombre: 'RU'
    },
    {
      value: 'Rwanda',
      nombre: 'RW'
    },
    {
      value: 'Réunion',
      nombre: 'RE'
    },
    {
      value: 'Saint Barthélemy',
      nombre: 'BL'
    },
    {
      value: 'Saint Helena, Ascension and Tristan da Cunha',
      nombre: 'SH'
    },
    {
      value: 'Saint Kitts and Nevis',
      nombre: 'KN'
    },
    {
      value: 'Saint Lucia',
      nombre: 'LC'
    },
    {
      value: 'Saint Martin (French part)',
      nombre: 'MF'
    },
    {
      value: 'Saint Pierre and Miquelon',
      nombre: 'PM'
    },
    {
      value: 'Saint Vincent and the Grenadines',
      nombre: 'VC'
    },
    {
      value: 'Samoa',
      nombre: 'WS'
    },
    {
      value: 'San Marino',
      nombre: 'SM'
    },
    {
      value: 'Sao Tome and Principe',
      nombre: 'ST'
    },
    {
      value: 'Saudi Arabia',
      nombre: 'SA'
    },
    {
      value: 'Senegal',
      nombre: 'SN'
    },
    {
      value: 'Serbia',
      nombre: 'RS'
    },
    {
      value: 'Seychelles',
      nombre: 'SC'
    },
    {
      value: 'Sierra Leone',
      nombre: 'SL'
    },
    {
      value: 'Singapore',
      nombre: 'SG'
    },
    {
      value: 'Sint Maarten (Dutch part)',
      nombre: 'SX'
    },
    {
      value: 'Slovakia',
      nombre: 'SK'
    },
    {
      value: 'Slovenia',
      nombre: 'SI'
    },
    {
      value: 'Solomon Islands',
      nombre: 'SB'
    },
    {
      value: 'Somalia',
      nombre: 'SO'
    },
    {
      value: 'South Africa',
      nombre: 'ZA'
    },
    {
      value: 'South Georgia and the South Sandwich Islands',
      nombre: 'GS'
    },
    {
      value: 'South Sudan',
      nombre: 'SS'
    },
    {
      value: 'Spain',
      nombre: 'ES'
    },
    {
      value: 'Sri Lanka',
      nombre: 'LK'
    },
    {
      value: 'Sudan (the)',
      nombre: 'SD'
    },
    {
      value: 'Suriname',
      nombre: 'SR'
    },
    {
      value: 'Svalbard and Jan Mayen',
      nombre: 'SJ'
    },
    {
      value: 'Sweden',
      nombre: 'SE'
    },
    {
      value: 'Switzerland',
      nombre: 'CH'
    },
    {
      value: 'Syrian Arab Republic',
      nombre: 'SY'
    },
    {
      value: 'Taiwan (Province of China)',
      nombre: 'TW'
    },
    {
      value: 'Tajikistan',
      nombre: 'TJ'
    },
    {
      value: 'Tanzania, United Republic of',
      nombre: 'TZ'
    },
    {
      value: 'Thailand',
      nombre: 'TH'
    },
    {
      value: 'Timor-Leste',
      nombre: 'TL'
    },
    {
      value: 'Togo',
      nombre: 'TG'
    },
    {
      value: 'Tokelau',
      nombre: 'TK'
    },
    {
      value: 'Tonga',
      nombre: 'TO'
    },
    {
      value: 'Trinidad and Tobago',
      nombre: 'TT'
    },
    {
      value: 'Tunisia',
      nombre: 'TN'
    },
    {
      value: 'Turkey',
      nombre: 'TR'
    },
    {
      value: 'Turkmenistan',
      nombre: 'TM'
    },
    {
      value: 'Turks and Caicos Islands (the)',
      nombre: 'TC'
    },
    {
      value: 'Tuvalu',
      nombre: 'TV'
    },
    {
      value: 'Uganda',
      nombre: 'UG'
    },
    {
      value: 'Ukraine',
      nombre: 'UA'
    },
    {
      value: 'United Arab Emirates (the)',
      nombre: 'AE'
    },
    {
      value: 'United Kingdom of Great Britain and Northern Ireland (the)',
      nombre: 'GB'
    },
    {
      value: 'United States Minor Outlying Islands (the)',
      nombre: 'UM'
    },
    {
      value: 'United States of America (the)',
      nombre: 'US'
    },
    {
      value: 'Uruguay',
      nombre: 'UY'
    },
    {
      value: 'Uzbekistan',
      nombre: 'UZ'
    },
    {
      value: 'Vanuatu',
      nombre: 'VU'
    },
    {
      value: 'Venezuela (Bolivarian Republic of)',
      nombre: 'VE'
    },
    {
      value: 'Viet Nam',
      nombre: 'VN'
    },
    {
      value: 'Virgin Islands (British)',
      nombre: 'VG'
    },
    {
      value: 'Virgin Islands (U.S.)',
      nombre: 'VI'
    },
    {
      value: 'Wallis and Futuna',
      nombre: 'WF'
    },
    {
      value: 'Western Sahara',
      nombre: 'EH'
    },
    {
      value: 'Yemen',
      nombre: 'YE'
    },
    {
      value: 'Zambia',
      nombre: 'ZM'
    },
    {
      value: 'Zimbabwe',
      nombre: 'ZW'
    },
    {
      value: 'Åland Islands',
      nombre: 'AX'
    }
  ]

  categorias: any[] = [
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'general', nombre: 'General' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnologia' },
  ]

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    };
    //SE PASAN LOS PARAMETROS AL COMPONENTE PADRE (app component)
    this.parametrosSeleccionador.emit(PARAMETROS);
  }

}
