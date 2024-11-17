<template>
  <div class="m-auto flex justify-center w-full max-w-4xl relative mt-12">
    <div class="z-10 absolute p-6 top-0 mt-32 left-0 max-w-96">
      <h1 class="text-primary text-5xl font-semibold flex align-middle">
        <Image class="mr-2" src="./icon.svg" :width="54" />
        <span>AeroDB</span>
      </h1>
      <h2 class="mt-4 text-4xl opacity-80">
        Your complete and elegant source of aeronautical data
      </h2>
    </div>
    <div class="absolute top-0 right-0 hidden md:block">
      <HomePageGlobe :airports="airports as any" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomePageGlobe from '@/components/HomePageGlobe.vue'
import Image from 'primevue/image'

const airports = [
  {
    name: 'Kumejima',
    icao: 'ROKJ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:33.729Z',
    coordinates: {
      latitude: 26.36347,
      longitude: 126.713821
    },
    elevation: 20
  },
  {
    name: 'Yellowstone',
    icao: 'KWYS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:34.235Z',
    coordinates: {
      latitude: 44.688385,
      longitude: -111.117691
    },
    elevation: 6641
  },
  {
    name: 'Los Manueles Airport',
    icao: 'MMZQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:34.744Z',
    coordinates: {
      latitude: 23.441536,
      longitude: -97.875984
    },
    elevation: 287
  },
  {
    name: 'Novovyazniki Airport',
    icao: 'UOOG',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:35.254Z',
    coordinates: {
      latitude: 56.136917,
      longitude: 42.176857
    },
    elevation: 444
  },
  {
    name: 'Fazenda Anhanguera Airport',
    icao: 'SWYM',
    runways: [
      {
        name: '16',
        length: 3871,
        width: 138,
        surface: 'ASP',
        lowEnd: {
          ident: '16',
          _id: '67307c44b0cc813ff9be05ed'
        },
        highEnd: {
          ident: '34',
          _id: '67307c44b0cc813ff9be05ee'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:26:28.480Z',
    coordinates: {
      latitude: -14.642499923706055,
      longitude: -59.449100494384766
    },
    elevation: 951,
    city: 'Pontes E Lacerda',
    countryCode: 'BR',
    county: 'BR-MT',
    state: 'BR-MT'
  },
  {
    name: 'Dabbs',
    icao: '6J5',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:36.268Z',
    coordinates: {
      latitude: 33.915268,
      longitude: -80.128548
    },
    elevation: 139
  },
  {
    name: 'Roney Farms',
    icao: '5GA6',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:36.774Z',
    coordinates: {
      latitude: 32.149708,
      longitude: -83.860977
    },
    elevation: 352
  },
  {
    name: 'Laurel Municipal Airport',
    icao: '08NE',
    runways: [
      {
        name: '11',
        length: 3000,
        width: 100,
        surface: 'TURF-G',
        lowEnd: {
          ident: '11',
          _id: '67307d7fb0cc813ff9beaf9f'
        },
        highEnd: {
          ident: '29',
          _id: '67307d7fb0cc813ff9beafa0'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:31:43.227Z',
    coordinates: {
      latitude: 42.430484,
      longitude: -97.078731
    },
    elevation: 1467,
    city: 'Laurel',
    countryCode: 'US',
    county: 'US-NE',
    state: 'US-NE',
    websiteUrl: ''
  },
  {
    name: 'Richland Airpark',
    icao: '1NY3',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-20T14:53:39.019Z',
    coordinates: {
      latitude: 43.5667,
      longitude: -76.032997
    },
    elevation: 560,
    city: 'Richland',
    countryCode: 'US',
    county: 'US-NY',
    state: 'US-NY',
    websiteUrl: ''
  },
  {
    name: 'Vatulele Airport',
    icao: 'NFVL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:38.297Z',
    coordinates: {
      latitude: -18.512308,
      longitude: 177.638672
    },
    elevation: 7
  },
  {
    name: 'Brooks Co',
    icao: 'KBKS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:38.807Z',
    coordinates: {
      latitude: 27.205801,
      longitude: -98.121414
    },
    elevation: 111
  },
  {
    name: 'Fazenda Campo Grande',
    icao: 'SDKO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:39.311Z',
    coordinates: {
      latitude: -20.257795,
      longitude: -48.788548
    },
    elevation: 1831
  },
  {
    name: 'Ami Airport',
    icao: 'RJAI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:39.826Z',
    coordinates: {
      latitude: 36.023918,
      longitude: 140.266663
    },
    elevation: 64
  },
  {
    name: 'Ihu Airport',
    icao: 'AYIC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:40.334Z',
    coordinates: {
      latitude: -7.897538,
      longitude: 145.396729
    },
    elevation: 30
  },
  {
    name: 'Fazenda Rebeca Airport',
    icao: 'SNRE',
    runways: [
      {
        name: '10',
        length: 4265,
        width: 59,
        surface: 'ASP',
        lowEnd: {
          ident: '10',
          _id: '67307c96b0cc813ff9be3264'
        },
        highEnd: {
          ident: '28',
          _id: '67307c96b0cc813ff9be3265'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:27:50.947Z',
    coordinates: {
      latitude: -12.6827,
      longitude: -43.871498
    },
    elevation: 1575,
    city: 'Serra Dourada',
    countryCode: 'BR',
    county: 'BR-BA',
    state: 'BR-BA'
  },
  {
    name: 'Douglas',
    icao: 'IL84',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:41.340Z',
    coordinates: {
      latitude: 40.575649,
      longitude: -91.101715
    },
    elevation: 650
  },
  {
    name: 'Diyarbakır Northwest Airport',
    icao: 'LTYO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:41.844Z',
    coordinates: {
      latitude: 38.012234,
      longitude: 39.954865
    },
    elevation: 2535
  },
  {
    name: 'Bienenfarm',
    icao: 'EDOI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:42.364Z',
    coordinates: {
      latitude: 52.661697,
      longitude: 12.746278
    },
    elevation: 120
  },
  {
    name: 'John Parker Strip',
    icao: 'AR26',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:42.876Z',
    coordinates: {
      latitude: 35.77533,
      longitude: -90.61805
    },
    elevation: 234
  },
  {
    name: 'Whidbey',
    icao: 'W10',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:43.387Z',
    coordinates: {
      latitude: 48.017578,
      longitude: -122.437767
    },
    elevation: 271
  },
  {
    name: 'Kluang',
    icao: 'WMAP',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:43.915Z',
    coordinates: {
      latitude: 2.041451,
      longitude: 103.306931
    },
    elevation: 142
  },
  {
    name: 'Roberson',
    icao: 'IN80',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:44.417Z',
    coordinates: {
      latitude: 38.321278,
      longitude: -86.491638
    },
    elevation: 690
  },
  {
    name: 'Tenevo Airstrip',
    icao: 'LB18',
    runways: [
      {
        name: '16',
        length: 8200,
        width: 80,
        surface: 'ASP',
        isClosed: false,
        isLighted: false,
        heading: 160,
        coordinates: {
          latitude: 42.35810089111328,
          longitude: 26.569299697875977
        }
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:20:52.037Z',
    coordinates: {
      latitude: 42.346401,
      longitude: 26.5739
    },
    elevation: 390,
    city: 'Tenevo',
    countryCode: 'BG',
    county: 'BG-28',
    state: 'BG-28'
  },
  {
    name: 'Wigent Airport',
    icao: '30IN',
    runways: [
      {
        name: 'NW',
        length: 2000,
        width: 70,
        surface: 'TURF',
        lowEnd: {
          ident: 'NW',
          _id: '67307bfcb0cc813ff9bddf19'
        },
        highEnd: {
          ident: 'SE',
          _id: '67307bfcb0cc813ff9bddf1a'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:25:16.088Z',
    coordinates: {
      latitude: 41.209202,
      longitude: -85.458
    },
    elevation: 880,
    city: 'Columbia City',
    countryCode: 'US',
    county: 'US-IN',
    state: 'US-IN'
  },
  {
    name: 'Lillo Airport',
    icao: 'LELT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:45.953Z',
    coordinates: {
      latitude: 39.716942,
      longitude: -3.320399
    },
    elevation: 2241
  },
  {
    name: 'Mindourou Airport',
    icao: 'FKBA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:46.456Z',
    coordinates: {
      latitude: 4.122287,
      longitude: 14.541227
    },
    elevation: 1981
  },
  {
    name: 'Fazenda Estância Regina Airport',
    icao: 'SIQD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:46.961Z',
    coordinates: {
      latitude: -20.644463,
      longitude: -54.791603
    },
    elevation: 1969
  },
  {
    name: 'Miraflores Airport',
    icao: 'SXOS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:47.466Z',
    coordinates: {
      latitude: 1.765985,
      longitude: -71.290306
    },
    elevation: 1101
  },
  {
    name: 'Bennetts',
    icao: '9TX2',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:47.976Z',
    coordinates: {
      latitude: 32.637077,
      longitude: -96.409637
    },
    elevation: 445
  },
  {
    name: 'Campo Belo Airport',
    icao: 'SNCA',
    runways: [
      {
        name: '10',
        length: 4659,
        width: 98,
        surface: 'ASP',
        lowEnd: {
          ident: '10',
          _id: '67307c61b0cc813ff9be15f9'
        },
        highEnd: {
          ident: '28',
          _id: '67307c61b0cc813ff9be15fa'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:26:57.731Z',
    coordinates: {
      latitude: -20.89229965209961,
      longitude: -45.33509826660156
    },
    elevation: 3182,
    city: 'Campo Belo',
    countryCode: 'BR',
    county: 'BR-MG',
    state: 'BR-MG'
  },
  {
    name: 'La Encantada Airport',
    icao: 'MMQV',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:49.003Z',
    coordinates: {
      latitude: 28.409674,
      longitude: -102.614296
    },
    elevation: 4257
  },
  {
    name: 'Nascimento Ii Airport',
    icao: 'SDNJ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:49.519Z',
    coordinates: {
      latitude: -24.072351,
      longitude: -48.22187
    },
    elevation: 2605
  },
  {
    name: 'Finch Hattons Airport',
    icao: 'HKMQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:50.021Z',
    coordinates: {
      latitude: -2.947954,
      longitude: 37.915222
    },
    elevation: 2580
  },
  {
    name: 'Fazenda Vale Eldorado - Dr José de Aguiar Leme Airport',
    icao: 'SDVH',
    runways: [
      {
        name: '04',
        length: 2428,
        width: 66,
        surface: 'ASP',
        lowEnd: {
          ident: '04',
          _id: '67307cdab0cc813ff9be56b5'
        },
        highEnd: {
          ident: '22',
          _id: '67307cdab0cc813ff9be56b6'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:28:58.848Z',
    coordinates: {
      latitude: -23.0054,
      longitude: -46.636913
    },
    elevation: 2727,
    city: 'Bragança Paulista',
    countryCode: 'BR',
    county: 'BR-SP',
    state: 'BR-SP'
  },
  {
    name: "Campo Di Volo Capo D'Orlando",
    icao: 'LIRO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:51.266Z',
    coordinates: {
      latitude: 38.126324,
      longitude: 14.707852
    },
    elevation: 21
  },
  {
    name: 'Marco Fidel Suarez AB',
    icao: 'SKGB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:51.778Z',
    coordinates: {
      latitude: 3.45852,
      longitude: -76.497261
    },
    elevation: 3165
  },
  {
    name: 'Arnage',
    icao: 'LFRM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:52.277Z',
    coordinates: {
      latitude: 47.947815,
      longitude: 0.201315
    },
    elevation: 171
  },
  {
    name: 'Krynychky Airport',
    icao: 'UKMQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:52.779Z',
    coordinates: {
      latitude: 48.399529,
      longitude: 34.479164
    },
    elevation: 437
  },
  {
    name: 'San Matias Airport',
    icao: 'SLUI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:53.297Z',
    coordinates: {
      latitude: -16.842388,
      longitude: -57.584961
    },
    elevation: 334
  },
  {
    name: 'Pobrezje Ul Field',
    icao: 'LJRE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:53.802Z',
    coordinates: {
      latitude: 46.304207,
      longitude: 14.90444
    },
    elevation: 1239
  },
  {
    name: 'Peterson Field',
    icao: '15WI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-20T14:53:06.088Z',
    coordinates: {
      latitude: 42.9275016784668,
      longitude: -89.41819763183594
    },
    elevation: 978,
    city: 'Oregon',
    countryCode: 'US',
    county: 'US-WI',
    state: 'US-WI',
    websiteUrl: ''
  },
  {
    name: 'Agoy Airfield',
    icao: 'UAGG',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:54.811Z',
    coordinates: {
      latitude: 44.138943,
      longitude: 39.028954
    },
    elevation: 6
  },
  {
    name: 'Ivato Airport',
    icao: 'FMMI',
    runways: [
      {
        name: '11',
        length: 10171,
        width: 148,
        surface: 'ASP',
        elevation: 4197,
        isClosed: false,
        isLighted: false,
        heading: 99,
        coordinates: {
          latitude: -18.7947998046875,
          longitude: 47.464298248291016
        }
      }
    ],
    frequencies: [
      {
        name: 'TWR',
        frequency: 120.1
      }
    ],
    updatedAt: '2024-11-09T17:02:24.835Z',
    coordinates: {
      latitude: -18.7969,
      longitude: 47.478802
    },
    elevation: 4198,
    city: 'Antananarivo',
    countryCode: 'MG',
    county: 'MG-T',
    iata: 'TNR',
    state: 'MG-T',
    websiteUrl: 'https://ravinala-airports.aero/en/'
  },
  {
    name: 'Antiquers Aerodrome',
    icao: 'FD08',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:55.823Z',
    coordinates: {
      latitude: 26.465361,
      longitude: -80.155205
    },
    elevation: 23
  },
  {
    name: 'Simpsonville',
    icao: 'VG12',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:56.325Z',
    coordinates: {
      latitude: 38.31731,
      longitude: -77.867401
    },
    elevation: 400
  },
  {
    name: 'Nhulunbuy Airport',
    icao: 'YOHH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:56.836Z',
    coordinates: {
      latitude: -12.160254,
      longitude: 136.174667
    },
    elevation: 25
  },
  {
    name: 'Palacios Municipal Airport',
    icao: 'KPSX',
    runways: [
      {
        name: '08',
        length: 5001,
        width: 150,
        surface: 'CON',
        elevation: 11,
        isClosed: false,
        isLighted: false,
        heading: 90.2,
        coordinates: {
          latitude: 28.73040008544922,
          longitude: -96.26210021972656
        }
      },
      {
        name: '13',
        length: 5001,
        width: 150,
        surface: 'CON',
        elevation: 12,
        isClosed: false,
        isLighted: false,
        heading: 135.2,
        coordinates: {
          latitude: 28.73069953918457,
          longitude: -96.2573013305664
        }
      },
      {
        name: '17',
        length: 5001,
        width: 150,
        surface: 'CON',
        elevation: 11,
        isClosed: false,
        isLighted: false,
        heading: 180.2,
        coordinates: {
          latitude: 28.733200073242188,
          longitude: -96.24669647216797
        }
      }
    ],
    frequencies: [
      {
        name: 'ASOS',
        type: 'ASOS',
        frequency: 118.025
      },
      {
        name: 'CNTR',
        type: 'CNTR',
        frequency: 128.6
      },
      {
        name: 'RDO',
        type: 'RDO',
        frequency: 122.25
      },
      {
        name: 'UNIC',
        type: 'UNIC',
        frequency: 122.8
      }
    ],
    updatedAt: '2024-11-09T20:18:32.558Z',
    coordinates: {
      latitude: 28.727500915527,
      longitude: -96.250999450684
    },
    elevation: 14,
    city: 'Palacios',
    countryCode: 'US',
    county: 'US-TX',
    iata: 'PSX',
    state: 'US-TX',
    websiteUrl: 'http://cityofpalacios.org/airport/'
  },
  {
    name: 'Fazenda Jussara Airport',
    icao: 'SWZQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:57.892Z',
    coordinates: {
      latitude: -15.845628,
      longitude: -51.072323
    },
    elevation: 1345
  },
  {
    name: 'Fazenda São Paulo Airport',
    icao: 'SSFP',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:58.392Z',
    coordinates: {
      latitude: -20.868977,
      longitude: -52.169216
    },
    elevation: 1123
  },
  {
    name: 'El Playon Airport',
    icao: 'SVHW',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:58.923Z',
    coordinates: {
      latitude: 9.119317,
      longitude: -68.955124
    },
    elevation: 315
  },
  {
    name: 'Comanche Livestock',
    icao: '59CO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:59.439Z',
    coordinates: {
      latitude: 39.835663,
      longitude: -104.326073
    },
    elevation: 5237
  },
  {
    name: 'Albalat De La Ribera',
    icao: 'LEPD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:11:59.941Z',
    coordinates: {
      latitude: 39.226196,
      longitude: -0.366518
    },
    elevation: 10
  },
  {
    name: 'Bandera State Airport',
    icao: '4W0',
    runways: [
      {
        name: '08',
        length: 2344,
        width: 200,
        surface: 'TURF-F',
        lowEnd: {
          ident: '08',
          coordinates: {
            latitude: 47.395999908447266,
            longitude: -121.54100036621094
          },
          _id: '67307d60b0cc813ff9be9edc'
        },
        highEnd: {
          ident: '26',
          coordinates: {
            latitude: 47.39469909667969,
            longitude: -121.53199768066406
          },
          _id: '67307d60b0cc813ff9be9edd'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:31:12.037Z',
    coordinates: {
      latitude: 47.39540100097656,
      longitude: -121.53600311279297
    },
    elevation: 1636,
    city: 'Bandera',
    countryCode: 'US',
    county: 'US-WA',
    state: 'US-WA'
  },
  {
    name: 'Jiri Airport',
    icao: 'VNJI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-11-10T09:30:06.803Z',
    coordinates: {
      latitude: 27.626313,
      longitude: 86.230581
    },
    elevation: 6000,
    city: 'Jiri',
    countryCode: 'NP',
    county: 'NP-P3',
    iata: 'JIR',
    state: 'NP-P3'
  },
  {
    name: 'Barra',
    icao: 'SNBX',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:01.516Z',
    coordinates: {
      latitude: -11.081038,
      longitude: -43.147583
    },
    elevation: 1276
  },
  {
    name: 'El Palmar Ranch Airstrip',
    icao: 'MMHH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:02.079Z',
    coordinates: {
      latitude: 22.79591,
      longitude: -99.141006
    },
    elevation: 436
  },
  {
    name: 'Itamarandiba Airport',
    icao: 'SBOA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:02.623Z',
    coordinates: {
      latitude: -17.913099,
      longitude: -42.873344
    },
    elevation: 3324
  },
  {
    name: 'Saratov South Airport',
    icao: 'USAR',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:03.157Z',
    coordinates: {
      latitude: 51.477356,
      longitude: 45.943439
    },
    elevation: 272
  },
  {
    name: 'Kynuna Airport',
    icao: 'YKYN',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:03.700Z',
    coordinates: {
      latitude: -21.599682,
      longitude: 141.917709
    },
    elevation: 670
  },
  {
    name: 'Newport Municipal Airport',
    icao: 'KONP',
    runways: [
      {
        name: '02',
        length: 3000,
        width: 75,
        surface: 'ASP',
        lowEnd: {
          ident: '02',
          elevation: 130,
          heading: 37,
          coordinates: {
            latitude: 44.57870101928711,
            longitude: -124.05999755859375
          },
          _id: '67307cc4b0cc813ff9be4af2'
        },
        highEnd: {
          ident: '20',
          elevation: 160,
          heading: 217,
          coordinates: {
            latitude: 44.58530044555664,
            longitude: -124.0530014038086
          },
          _id: '67307cc4b0cc813ff9be4af3'
        },
        isClosed: false,
        isLighted: false
      },
      {
        name: '16',
        length: 5398,
        width: 150,
        surface: 'ASP',
        lowEnd: {
          ident: '16',
          elevation: 151,
          heading: 177,
          coordinates: {
            latitude: 44.58679962158203,
            longitude: -124.05899810791016
          },
          _id: '67307cc4b0cc813ff9be4af4'
        },
        highEnd: {
          ident: '34',
          elevation: 155,
          heading: 357,
          displacedThreshold: 300,
          coordinates: {
            latitude: 44.57210159301758,
            longitude: -124.05799865722656
          },
          _id: '67307cc4b0cc813ff9be4af5'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [
      {
        name: 'AWOS',
        type: 'AWOS',
        frequency: 133.9
      },
      {
        name: 'CNTR',
        type: 'CNTR',
        frequency: 125.8
      },
      {
        name: 'UNIC',
        type: 'UNIC',
        frequency: 122.8
      }
    ],
    updatedAt: '2024-11-10T09:28:36.882Z',
    coordinates: {
      latitude: 44.580399,
      longitude: -124.057999
    },
    elevation: 160,
    city: 'Newport',
    countryCode: 'US',
    county: 'US-OR',
    iata: 'ONP',
    state: 'US-OR'
  },
  {
    name: 'Sutiski',
    icao: 'UKSU',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:04.777Z',
    coordinates: {
      latitude: 49.065472,
      longitude: 28.443674
    },
    elevation: 842
  },
  {
    name: 'Los Pintos Aurport',
    icao: 'MXNA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:05.304Z',
    coordinates: {
      latitude: 28.56098,
      longitude: -101.679909
    },
    elevation: 2349
  },
  {
    name: 'Kaml Airstrip',
    icao: '45MN',
    runways: [
      {
        name: 'NW',
        length: 1700,
        width: 75,
        surface: 'TURF',
        lowEnd: {
          ident: 'NW',
          _id: '67307b93b0cc813ff9bdb161'
        },
        highEnd: {
          ident: 'SE',
          _id: '67307b93b0cc813ff9bdb162'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:23:31.299Z',
    coordinates: {
      latitude: 47.92610168457031,
      longitude: -96.61419677734375
    },
    elevation: 898,
    city: 'Euclid',
    countryCode: 'US',
    county: 'US-MN',
    state: 'US-MN'
  },
  {
    name: 'Pulkrabek Landing Field',
    icao: 'MN06',
    runways: [
      {
        name: '0N',
        length: 2600,
        width: 150,
        surface: 'TURF',
        lowEnd: {
          ident: '0N',
          _id: '67307cdab0cc813ff9be565d'
        },
        highEnd: {
          ident: '0S',
          _id: '67307cdab0cc813ff9be565e'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:28:58.215Z',
    coordinates: {
      latitude: 48.053773,
      longitude: -96.788167
    },
    elevation: 850,
    city: 'Angus',
    countryCode: 'US',
    county: 'US-MN',
    state: 'US-MN'
  },
  {
    name: 'Metter Municipal Airport',
    icao: 'KMHP',
    runways: [
      {
        name: '10',
        length: 3612,
        width: 75,
        surface: 'ASP',
        lowEnd: {
          ident: '10',
          elevation: 195,
          heading: 93,
          coordinates: {
            latitude: 32.37409973144531,
            longitude: -82.08499908447266
          },
          _id: '67307d14b0cc813ff9be75d4'
        },
        highEnd: {
          ident: '28',
          elevation: 196,
          heading: 273,
          coordinates: {
            latitude: 32.37369918823242,
            longitude: -82.07330322265625
          },
          _id: '67307d14b0cc813ff9be75d5'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [
      {
        name: 'CNTR',
        type: 'CNTR',
        frequency: 132.5
      },
      {
        name: 'UNIC',
        type: 'UNIC',
        frequency: 123
      }
    ],
    updatedAt: '2024-11-10T09:29:56.360Z',
    coordinates: {
      latitude: 32.373885,
      longitude: -82.081775
    },
    elevation: 197,
    city: 'Metter',
    countryCode: 'US',
    county: 'US-GA',
    state: 'US-GA'
  },
  {
    name: 'Boma Airport',
    icao: 'FZAJ',
    runways: [
      {
        name: '03',
        length: 3346,
        surface: 'GRAVEL',
        lowEnd: {
          ident: '03',
          _id: '67307c9bb0cc813ff9be34f2'
        },
        highEnd: {
          ident: '21',
          _id: '67307c9bb0cc813ff9be34f3'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:27:55.793Z',
    coordinates: {
      latitude: -5.854,
      longitude: 13.064
    },
    elevation: 26,
    city: 'Boma',
    countryCode: 'CD',
    county: 'CD-BC',
    iata: 'BOA',
    state: 'CD-BC'
  },
  {
    name: 'Mezhdurechenskiy Airport',
    icao: 'UMEZ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:07.890Z',
    coordinates: {
      latitude: 59.57954,
      longitude: 65.895813
    },
    elevation: 215
  },
  {
    name: 'Gentzke Aeronautical Park Airport',
    icao: 'NY40',
    runways: [
      {
        name: '0E',
        length: 2000,
        width: 100,
        surface: 'TURF',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:21:23.079Z',
    coordinates: {
      latitude: 42.610599517822266,
      longitude: -78.59559631347656
    },
    elevation: 1750,
    city: 'Holland',
    countryCode: 'US',
    county: 'US-NY',
    state: 'US-NY'
  },
  {
    name: 'C.F. De Souza Bais Airport',
    icao: 'SWWD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:09.023Z',
    coordinates: {
      latitude: -1.691836,
      longitude: -63.785767
    },
    elevation: 122
  },
  {
    name: 'El Gallito Airstrip',
    icao: 'MMRQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:09.562Z',
    coordinates: {
      latitude: 26.894804,
      longitude: -111.95594
    },
    elevation: 12
  },
  {
    name: 'Balassagyarmat Airfield',
    icao: 'LHBA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-11-09T20:20:49.143Z',
    coordinates: {
      latitude: 48.078037,
      longitude: 19.321749
    },
    elevation: 466,
    city: 'Balassagyarmat',
    countryCode: 'HU',
    county: 'HU-NO',
    state: 'HU-NO'
  },
  {
    name: 'Matetsi Airport',
    icao: 'FBPD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:10.596Z',
    coordinates: {
      latitude: -18.49894,
      longitude: 25.918652
    },
    elevation: 3415
  },
  {
    name: 'Base Ulm De Javerlhac',
    icao: 'LFUE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:11.202Z',
    coordinates: {
      latitude: 45.553577,
      longitude: 0.557798
    },
    elevation: 626
  },
  {
    name: 'San Jose',
    icao: 'RPUH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-15T19:12:11.710Z',
    coordinates: {
      latitude: 12.361549,
      longitude: 121.046585
    },
    elevation: 12
  },
  {
    name: 'Tak',
    icao: 'VTPT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:12.498Z'
  },
  {
    name: 'Necocli',
    icao: 'SKNC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:18:52.541Z'
  },
  {
    name: 'Rosenberg Airport',
    icao: 'MY80',
    runways: [
      {
        name: '10',
        length: 2500,
        width: 90,
        surface: 'TURF',
        lowEnd: {
          ident: '10',
          _id: '67307c2fb0cc813ff9bdfa85'
        },
        highEnd: {
          ident: '28',
          _id: '67307c2fb0cc813ff9bdfa86'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:26:07.612Z',
    city: 'Ceylon',
    coordinates: {
      latitude: 43.52220153808594,
      longitude: -94.5824966430664
    },
    countryCode: 'US',
    county: 'US-MN',
    elevation: 1255,
    state: 'US-MN'
  },
  {
    name: 'Setermoen Airstrip',
    icao: 'ENSQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:05:34.621Z',
    coordinates: {
      latitude: 68.856216,
      longitude: 18.350914
    },
    elevation: 278
  },
  {
    name: 'Santa Terezinha Airport',
    icao: 'SISX',
    runways: [
      {
        name: '07',
        length: 1312,
        width: 66,
        surface: 'GRS',
        lowEnd: {
          ident: '07',
          _id: '67307bb7b0cc813ff9bdc507'
        },
        highEnd: {
          ident: '25',
          _id: '67307bb7b0cc813ff9bdc508'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:24:07.667Z',
    city: 'Aquidauana',
    coordinates: {
      latitude: -19.379788,
      longitude: -56.057986
    },
    countryCode: 'BR',
    county: 'BR-MS',
    elevation: 361,
    state: 'BR-MS'
  },
  {
    name: 'Dubai Airport',
    icao: 'OMDD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:19:04.931Z'
  },
  {
    name: 'Shakhovskaya Airport',
    icao: 'USHV',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:14.660Z'
  },
  {
    name: 'Pofadder',
    icao: 'FAPD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:10:16.470Z',
    coordinates: {
      latitude: -29.133846,
      longitude: 19.40556
    },
    elevation: 3275
  },
  {
    name: 'Poole',
    icao: 'II86',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:15.385Z'
  },
  {
    name: 'Moenjodaro Airport',
    icao: 'OPMJ',
    runways: [
      {
        name: '08',
        length: 6512,
        width: 98,
        surface: 'ASP',
        elevation: 154,
        isClosed: false,
        isLighted: false,
        heading: 77,
        coordinates: {
          latitude: 27.333099365234375,
          longitude: 68.1333999633789
        }
      }
    ],
    frequencies: [
      {
        name: 'GND',
        type: 'GND',
        frequency: 121.8
      },
      {
        name: 'TWR',
        type: 'TWR',
        frequency: 119.6
      }
    ],
    updatedAt: '2024-11-09T20:18:21.367Z',
    city: 'Moenjodaro',
    coordinates: {
      latitude: 27.3351993560791,
      longitude: 68.1430969238281
    },
    countryCode: 'PK',
    county: 'PK-SD',
    elevation: 154,
    iata: 'MJD',
    state: 'PK-SD'
  },
  {
    name: 'Nether Huntlywood Airstrip',
    icao: 'EGIT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:49:13.124Z'
  },
  {
    name: 'Flying-H Airport',
    icao: 'FL99',
    runways: [
      {
        name: '18',
        length: 2640,
        width: 300,
        surface: 'TURF',
        lowEnd: {
          ident: '18',
          _id: '67307b89b0cc813ff9bdabd4'
        },
        highEnd: {
          ident: '36',
          _id: '67307b89b0cc813ff9bdabd5'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:23:21.129Z',
    city: 'Fruitland Park',
    coordinates: {
      latitude: 28.876100540161133,
      longitude: -81.88899993896484
    },
    countryCode: 'US',
    county: 'US-FL',
    elevation: 80,
    state: 'US-FL'
  },
  {
    name: 'Seven Rivers',
    icao: '62NM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:08:13.960Z'
  },
  {
    name: 'Poplar Mun',
    icao: 'PO1',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:17.044Z'
  },
  {
    name: 'Fazenda Uirapuru Airport',
    icao: 'SWUU',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:51:12.969Z'
  },
  {
    name: 'Tío Pujio Airport',
    icao: 'SAXL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:57:03.915Z'
  },
  {
    name: 'Houghton County Memorial',
    icao: 'KCMX',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:08:56.266Z'
  },
  {
    name: 'Farm Dawib Ost Landing Strip',
    icao: 'FYUA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:12:02.610Z'
  },
  {
    name: 'Nyagan',
    icao: 'USHN',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:42:27.902Z'
  },
  {
    name: 'Angra Dos Reis',
    icao: 'SDAG',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:47:52.729Z'
  },
  {
    name: 'Rosário do Leste Airport',
    icao: 'SWDO',
    runways: [
      {
        name: '09',
        length: 2625,
        width: 79,
        surface: 'ASP',
        lowEnd: {
          ident: '09',
          _id: '67307c41b0cc813ff9be0435'
        },
        highEnd: {
          ident: '27',
          _id: '67307c41b0cc813ff9be0436'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:26:25.227Z',
    city: 'Rosário do Leste',
    coordinates: {
      latitude: -14.816944,
      longitude: -56.417221
    },
    countryCode: 'BR',
    county: 'BR-MT',
    elevation: 699,
    state: 'BR-MT'
  },
  {
    name: 'Swan Field',
    icao: 'WS36',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:07:21.872Z'
  },
  {
    name: 'Harbour',
    icao: 'MO30',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:58:16.890Z'
  },
  {
    name: 'Michurinsk Airport',
    icao: 'UMIU',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:26:41.431Z'
  },
  {
    name: 'Aerodeportes Airfield',
    icao: 'MMDD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:21.211Z'
  },
  {
    name: 'Alto Paraíso Airport',
    icao: 'SDXF',
    runways: [
      {
        name: '09',
        length: 3937,
        width: 98,
        surface: 'ASP',
        lowEnd: {
          ident: '09',
          _id: '67307ce9b0cc813ff9be5ea1'
        },
        highEnd: {
          ident: '27',
          _id: '67307ce9b0cc813ff9be5ea2'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:13.475Z',
    coordinates: {
      latitude: -14.121000289916992,
      longitude: -47.53089904785156
    },
    elevation: 4413,
    city: 'Alto Paraíso',
    countryCode: 'BR',
    county: 'BR-GO',
    state: 'BR-GO'
  },
  {
    name: 'Weißenhorn Airfield',
    icao: 'EDNW',
    runways: [
      {
        name: '08',
        length: 2132,
        width: 98,
        surface: 'GRASS',
        lowEnd: {
          ident: '08',
          _id: '67307dc9b0cc813ff9bed737'
        },
        highEnd: {
          ident: '26',
          _id: '67307dc9b0cc813ff9bed738'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:32:57.292Z',
    city: 'Weißenhorn',
    coordinates: {
      latitude: 48.289444,
      longitude: 10.140278
    },
    countryCode: 'DE',
    county: 'DE-BY',
    elevation: 1644,
    state: 'DE-BY'
  },
  {
    name: 'Ilas Wexford',
    icao: 'EILO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:40:46.269Z'
  },
  {
    name: 'Miller',
    icao: '25TS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:07:22.113Z'
  },
  {
    name: 'Trail',
    icao: 'CAD4',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:17:49.771Z'
  },
  {
    name: 'Vizcaino Airport',
    icao: 'MMEE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:23.637Z'
  },
  {
    name: 'Tauranga',
    icao: 'NZTG',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:03:21.814Z'
  },
  {
    name: 'Galvez Airport',
    icao: 'SAGV',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:56:00.928Z'
  },
  {
    name: 'Fremont Municipal Airport',
    icao: 'KFFX',
    runways: [
      {
        name: '09',
        length: 3502,
        width: 75,
        surface: 'ASP',
        elevation: 767,
        isClosed: false,
        isLighted: false,
        heading: 91,
        coordinates: {
          latitude: 43.44390106201172,
          longitude: -85.99839782714844
        }
      },
      {
        name: '19',
        length: 6500,
        width: 100,
        surface: 'ASP',
        elevation: 770,
        isClosed: false,
        isLighted: false,
        heading: 179,
        coordinates: {
          latitude: 43.445801,
          longitude: -85.996597
        }
      }
    ],
    frequencies: [
      {
        name: 'A/D',
        frequency: 119.8
      },
      {
        name: 'CLD',
        frequency: 118.25
      },
      {
        name: 'UNIC',
        frequency: 123
      }
    ],
    updatedAt: '2024-11-09T16:55:10.852Z',
    city: 'Fremont',
    coordinates: {
      latitude: 43.436854,
      longitude: -85.996592
    },
    countryCode: 'US',
    county: 'US-MI',
    elevation: 772,
    state: 'US-MI'
  },
  {
    name: 'Udelva Airport',
    icao: 'SKJM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:58:34.318Z'
  },
  {
    name: 'Remada Air Base',
    icao: 'DTTD',
    runways: [
      {
        name: '02',
        length: 7812,
        width: 148,
        surface: 'ASP',
        lowEnd: {
          ident: '02',
          heading: 23,
          coordinates: {
            latitude: 32.296199798583984,
            longitude: 10.37720012664795
          },
          _id: '67307c81b0cc813ff9be26f4'
        },
        highEnd: {
          ident: '20',
          heading: 203,
          coordinates: {
            latitude: 32.316001892089844,
            longitude: 10.38700008392334
          },
          _id: '67307c81b0cc813ff9be26f5'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:27:29.458Z',
    city: 'Remada',
    coordinates: {
      latitude: 32.306198,
      longitude: 10.3821
    },
    countryCode: 'TN',
    county: 'TN-83',
    elevation: 1004,
    state: 'TN-83'
  },
  {
    name: 'Duval-Freer',
    icao: 'T19',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:12:42.615Z',
    coordinates: {
      latitude: 27.888998,
      longitude: -98.600197
    },
    elevation: 564
  },
  {
    name: 'Fort Rucker Airport',
    icao: 'KFOQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:05:43.979Z'
  },
  {
    name: 'El Reno Mun',
    icao: 'KRQO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:03:07.500Z'
  },
  {
    name: 'Borme Airstrip',
    icao: 'WAUF',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:09:50.430Z',
    coordinates: {
      latitude: -4.39409,
      longitude: 140.436737
    },
    elevation: 3093
  },
  {
    name: 'Snow Hill Airstrip',
    icao: '94GA',
    runways: [
      {
        name: '18',
        length: 3800,
        width: 75,
        surface: 'TURF',
        lowEnd: {
          ident: '18',
          _id: '67307d02b0cc813ff9be6c2c'
        },
        highEnd: {
          ident: '36',
          _id: '67307d02b0cc813ff9be6c2d'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:38.550Z',
    city: 'Unadilla',
    coordinates: {
      latitude: 32.262901306152344,
      longitude: -83.78710174560547
    },
    countryCode: 'US',
    county: 'US-GA',
    elevation: 465,
    state: 'US-GA'
  },
  {
    name: 'Nohanas Airport',
    icao: 'FXNH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-11-10T09:28:08.666Z',
    city: 'Nohanas',
    coordinates: {
      latitude: -30.066999,
      longitude: 27.867001
    },
    countryCode: 'LS',
    county: 'LS-F',
    elevation: 5400,
    state: 'LS-F'
  },
  {
    name: 'Warder Airport',
    icao: 'HAWR',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:22:24.415Z'
  },
  {
    name: 'Wax Orchards Airport',
    icao: 'WA69',
    runways: [
      {
        name: '16',
        length: 2050,
        width: 120,
        surface: 'TURF-F',
        lowEnd: {
          ident: '16',
          _id: '67307cfab0cc813ff9be6809'
        },
        highEnd: {
          ident: '34',
          _id: '67307cfab0cc813ff9be680a'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:30.746Z',
    coordinates: {
      latitude: 47.400182,
      longitude: -122.499415
    },
    elevation: 389,
    city: 'Vashon',
    countryCode: 'US',
    county: 'US-WA',
    state: 'US-WA'
  },
  {
    name: 'Winters Airport',
    icao: '0II9',
    runways: [
      {
        name: '18',
        length: 1600,
        width: 75,
        surface: 'TURF',
        lowEnd: {
          ident: '18',
          _id: '67307d85b0cc813ff9beb300'
        },
        highEnd: {
          ident: '36',
          _id: '67307d85b0cc813ff9beb301'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:31:49.222Z',
    city: 'Martinsville',
    coordinates: {
      latitude: 39.532612,
      longitude: -86.576729
    },
    countryCode: 'US',
    county: 'US-IN',
    elevation: 755,
    state: 'US-IN',
    websiteUrl: ''
  },
  {
    name: 'Waltenberry Field Ultralightport',
    icao: '13AZ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-20T14:52:56.802Z',
    city: 'Tonopah',
    coordinates: {
      latitude: 33.535,
      longitude: -112.853472222
    },
    countryCode: 'US',
    county: 'US-AZ',
    elevation: 1213,
    state: 'US-AZ',
    websiteUrl: ''
  },
  {
    name: 'Chaplynka Airport',
    icao: 'UKOY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:21:47.302Z'
  },
  {
    name: 'Arba Minch Airport',
    icao: 'HAAM',
    runways: [
      {
        name: '03',
        length: 9170,
        width: 153,
        surface: 'ASP',
        lowEnd: {
          ident: '03',
          elevation: 3895,
          heading: 32,
          coordinates: {
            latitude: 6.028689861297607,
            longitude: 37.58369827270508
          },
          _id: '67307be7b0cc813ff9bdd3c8'
        },
        highEnd: {
          ident: '21',
          elevation: 3883,
          heading: 212,
          coordinates: {
            latitude: 6.0500898361206055,
            longitude: 37.597198486328125
          },
          _id: '67307be7b0cc813ff9bdd3c9'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:24:55.266Z',
    coordinates: {
      latitude: 6.03939,
      longitude: 37.5905
    },
    elevation: 3901,
    city: 'Arba Minch',
    countryCode: 'ET',
    county: 'ET-SN',
    iata: 'AMH',
    state: 'ET-SN'
  },
  {
    name: 'Bednary',
    icao: 'EPPB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:07:15.319Z'
  },
  {
    name: 'Adnan Menderes',
    icao: 'LTBJ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:30.537Z'
  },
  {
    name: 'Puerto Piramides Airport',
    icao: 'SAPT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:26:32.919Z'
  },
  {
    name: 'Corlier Altiport',
    icao: 'LFJD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-11-10T09:25:06.097Z',
    coordinates: {
      latitude: 46.040531,
      longitude: 5.494537
    },
    elevation: 2762,
    countryCode: 'FR',
    county: 'FR-ARA',
    state: 'FR-ARA'
  },
  {
    name: 'Cerro Azul',
    icao: 'MM34',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:31.653Z'
  },
  {
    name: 'Murgenella Airstrip',
    icao: 'YMCC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:31.967Z'
  },
  {
    name: 'Karlsborg AB',
    icao: 'ESIA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:32.300Z'
  },
  {
    name: 'Delatite Airstrip',
    icao: 'YMAN',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:32.674Z'
  },
  {
    name: 'Lora Airport',
    icao: 'MUJE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:33.060Z'
  },
  {
    name: 'Jonesville Airport',
    icao: 'KJON',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:11:18.388Z'
  },
  {
    name: 'Driftwood Ranch Airport',
    icao: 'XA86',
    runways: [
      {
        name: '15',
        length: 2975,
        width: 40,
        surface: 'ASPH-G',
        lowEnd: {
          ident: '15',
          _id: '67307decb0cc813ff9beea2b'
        },
        highEnd: {
          ident: '33',
          _id: '67307decb0cc813ff9beea2c'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:33:32.063Z',
    city: 'Weatherford',
    coordinates: {
      latitude: 32.56700134277344,
      longitude: -97.80480194091797
    },
    countryCode: 'US',
    county: 'US-TX',
    elevation: 710,
    state: 'US-TX'
  },
  {
    name: 'Rancho Cerro Blanco Airport',
    icao: 'MMQY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:58:47.753Z'
  },
  {
    name: 'Tall Afar',
    icao: 'OR0F',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:56:03.440Z'
  },
  {
    name: 'Independence Mun',
    icao: 'KIIB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:07:34.128Z'
  },
  {
    name: 'Cedar Valley',
    icao: 'UT10',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:35.278Z'
  },
  {
    name: 'Sasovo Airfield',
    icao: 'USAS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:41:30.325Z'
  },
  {
    name: 'Terminal Airport',
    icao: 'MMDC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:35.964Z'
  },
  {
    name: 'Scotland Neck East',
    icao: '2NC7',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:36.310Z'
  },
  {
    name: 'Leroy',
    icao: '4AZ9',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:36.620Z'
  },
  {
    name: 'Douthitt Strip',
    icao: '23CN',
    runways: [
      {
        name: '04',
        length: 1800,
        width: 100,
        surface: 'DIRT',
        isClosed: false,
        isLighted: false
      },
      {
        name: '08',
        length: 1400,
        width: 100,
        surface: 'DIRT',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:22:38.350Z',
    city: 'El Centro',
    coordinates: {
      latitude: 32.789013,
      longitude: -115.528535
    },
    countryCode: 'US',
    county: 'US-CA',
    elevation: 45,
    state: 'US-CA'
  },
  {
    name: 'Pechory Airport',
    icao: 'UPEH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:44:29.524Z'
  },
  {
    name: 'Briercrest South',
    icao: 'CBS7',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:37.696Z'
  },
  {
    name: 'Trysil Sæteråsen Airport',
    icao: 'ENTS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:38.026Z'
  },
  {
    name: 'Morten',
    icao: '62ND',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:30:34.015Z'
  },
  {
    name: 'Utica',
    icao: 'CUT2',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:38.839Z'
  },
  {
    name: 'Airbatco Field',
    icao: '44MI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:11:18.279Z',
    coordinates: {
      latitude: 42.774494,
      longitude: -84.903236
    },
    elevation: 852
  },
  {
    name: "N'Zeto",
    icao: 'FNZE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:03:28.200Z'
  },
  {
    name: 'Utti Air Base',
    icao: 'EFUT',
    runways: [
      {
        name: '07',
        length: 6562,
        width: 148,
        surface: 'ASP',
        heading: 78,
        coordinates: {
          latitude: 60.894500732421875,
          longitude: 26.920299530029297
        }
      }
    ],
    frequencies: [
      {
        name: 'ATIS',
        frequency: 114.6
      },
      {
        name: 'TWR',
        frequency: 119.7
      }
    ],
    updatedAt: '2024-11-08T20:28:33.876Z',
    city: 'Utti / Valkeala',
    coordinates: {
      latitude: 60.8964,
      longitude: 26.9384
    },
    countryCode: 'FI',
    county: 'FI-09',
    elevation: 339,
    state: 'FI-09'
  },
  {
    name: 'Caleta Olivia Airport',
    icao: 'SAQW',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:11:20.715Z'
  },
  {
    name: 'CFB Greenwood',
    icao: 'CYZX',
    runways: [
      {
        name: '08',
        length: 8000,
        width: 200,
        surface: 'ASP',
        elevation: 85,
        isClosed: false,
        isLighted: false,
        heading: 64,
        coordinates: {
          latitude: 44.98109817504883,
          longitude: -64.93250274658203
        }
      },
      {
        name: '12',
        length: 8000,
        width: 200,
        surface: 'ASP',
        elevation: 81,
        isClosed: false,
        isLighted: false,
        heading: 107,
        coordinates: {
          latitude: 44.98360061645508,
          longitude: -64.931396484375
        }
      }
    ],
    frequencies: [
      {
        name: 'A/D',
        frequency: 120.6
      },
      {
        name: 'ATIS',
        frequency: 128.85
      },
      {
        name: 'CLD',
        frequency: 128.025
      },
      {
        name: 'GND',
        frequency: 133.75
      },
      {
        name: 'INFO',
        frequency: 30.86
      },
      {
        name: 'OPS',
        frequency: 129.775
      },
      {
        name: 'PMSV',
        frequency: 34.46
      },
      {
        name: 'TWR',
        frequency: 119.5
      }
    ],
    updatedAt: '2024-11-09T17:02:57.521Z',
    city: 'Greenwood',
    coordinates: {
      latitude: 44.98440170288086,
      longitude: -64.9169006347656
    },
    countryCode: 'CA',
    county: 'CA-NS',
    elevation: 92,
    iata: 'YZX',
    state: 'CA-NS'
  },
  {
    name: 'La Barquereña Airport',
    icao: 'SKVB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:40.962Z'
  },
  {
    name: 'Gen Abelardo L Rodriguez Intl',
    icao: 'MMTJ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:41.297Z'
  },
  {
    name: 'Antalya',
    icao: 'LTAI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:18:53.200Z'
  },
  {
    name: 'Hollis Mun',
    icao: 'O35',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:42.014Z'
  },
  {
    name: 'Alavus',
    icao: 'EFAL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:42.401Z'
  },
  {
    name: 'Lochini',
    icao: 'UGTB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:42.849Z'
  },
  {
    name: 'Cape Town Intl',
    icao: 'FACT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:09:53.066Z',
    coordinates: {
      latitude: -33.970306,
      longitude: 18.604219
    },
    elevation: 146
  },
  {
    name: 'Piggott Mun',
    icao: '7M7',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:20:24.139Z'
  },
  {
    name: 'Sunset Strip Airpark',
    icao: '90KS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:03:26.855Z'
  },
  {
    name: 'Colonia Volendam Airport',
    icao: 'SGAT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:20:03.179Z'
  },
  {
    name: 'One Hundred Mile House',
    icao: 'CAV3',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:02:09.046Z'
  },
  {
    name: 'Twycross (Gopsall House) Airstrip',
    icao: 'EGMM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:45.014Z'
  },
  {
    name: 'Sheboygan County Memorial',
    icao: 'KSBM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:45.405Z'
  },
  {
    name: 'Bussen Airport',
    icao: '6KS4',
    runways: [
      {
        name: '14',
        length: 3003,
        width: 88,
        surface: 'TURF',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:21:49.801Z',
    city: 'Sharon Springs',
    coordinates: {
      latitude: 38.907264,
      longitude: -101.785326
    },
    countryCode: 'US',
    county: 'US-KS',
    elevation: 3475,
    state: 'US-KS'
  },
  {
    name: 'Fregon Airport',
    icao: 'YFRG',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:10:49.434Z'
  },
  {
    name: 'Tromsø Airport, Langnes',
    icao: 'ENTC',
    runways: [
      {
        name: '18',
        length: 7848,
        width: 148,
        surface: 'ASP',
        lowEnd: {
          ident: '18',
          elevation: 13,
          heading: 193,
          displacedThreshold: 1286,
          coordinates: {
            latitude: 69.6937026977539,
            longitude: 18.925899505615234
          },
          _id: '67307ba8b0cc813ff9bdbc83'
        },
        highEnd: {
          ident: '36',
          elevation: 25,
          heading: 13,
          coordinates: {
            latitude: 69.67289733886719,
            longitude: 18.91189956665039
          },
          _id: '67307ba8b0cc813ff9bdbc84'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [
      {
        name: 'APP',
        type: 'APP',
        frequency: 123.75
      },
      {
        name: 'ATIS',
        type: 'ATIS',
        frequency: 126.125
      },
      {
        name: 'TWR',
        type: 'TWR',
        frequency: 118.3
      }
    ],
    updatedAt: '2024-11-10T09:23:52.178Z',
    city: 'Tromsø',
    coordinates: {
      latitude: 69.683296,
      longitude: 18.9189
    },
    countryCode: 'NO',
    county: 'NO-55',
    elevation: 31,
    state: 'NO-55',
    websiteUrl: 'http://www.avinor.no/en/airport/tromso',
    iata: 'TOS'
  },
  {
    name: 'Ostrov Vozrozhdeniya Airport',
    icao: 'UTMO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:46.902Z'
  },
  {
    name: 'Warner Springs',
    icao: 'CL35',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:51:13.766Z'
  },
  {
    name: 'Mannheim City',
    icao: 'EDFM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:20:12.537Z'
  },
  {
    name: 'Sandane Airport, Anda',
    icao: 'ENSD',
    runways: [
      {
        name: '08',
        length: 3182,
        width: 98,
        surface: 'ASP',
        lowEnd: {
          ident: '08',
          elevation: 181,
          heading: 85,
          coordinates: {
            latitude: 61.82979965209961,
            longitude: 6.100329875946045
          },
          _id: '67307dd3b0cc813ff9bedc85'
        },
        highEnd: {
          ident: '26',
          elevation: 179,
          heading: 265,
          coordinates: {
            latitude: 61.830501556396484,
            longitude: 6.116330146789551
          },
          _id: '67307dd3b0cc813ff9bedc86'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:33:07.257Z',
    city: 'Sandane',
    coordinates: {
      latitude: 61.830002,
      longitude: 6.10583
    },
    countryCode: 'NO',
    county: 'NO-46',
    elevation: 196,
    iata: 'SDN',
    state: 'NO-46',
    websiteUrl: 'https://avinor.no/en/airport/sandane-airport/'
  },
  {
    name: 'Aporé Airstrip',
    icao: 'SBCE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:46:39.789Z'
  },
  {
    name: 'Caughdenoy Airport',
    icao: '1NY9',
    runways: [
      {
        name: '18',
        length: 1800,
        width: 60,
        surface: 'TURF',
        lowEnd: {
          ident: '18',
          _id: '67307d85b0cc813ff9beb34f'
        },
        highEnd: {
          ident: '36',
          _id: '67307d85b0cc813ff9beb350'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:31:49.779Z',
    city: 'Caughdenoy',
    coordinates: {
      latitude: 43.2659,
      longitude: -76.188004
    },
    countryCode: 'US',
    county: 'US-NY',
    elevation: 400,
    state: 'US-NY',
    websiteUrl: ''
  },
  {
    name: 'Scottsboro Muni-Word Field',
    icao: '4A6',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:54:51.798Z'
  },
  {
    name: 'Soldier Meadow Number 2 Airport',
    icao: 'NV05',
    runways: [
      {
        name: '09',
        length: 2500,
        width: 40,
        surface: 'DIRT',
        isClosed: false,
        isLighted: false
      },
      {
        name: '18',
        length: 4000,
        width: 40,
        surface: 'DIRT',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:20:17.564Z',
    city: 'Gerlach',
    coordinates: {
      latitude: 41.123501,
      longitude: -119.139
    },
    countryCode: 'US',
    county: 'US-NV',
    elevation: 4150,
    state: 'US-NV'
  },
  {
    name: "Linda's Roost",
    icao: '2ID2',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:49.943Z'
  },
  {
    name: 'Los Morros Airport',
    icao: 'SCQR',
    runways: [
      {
        name: '17',
        length: 2297,
        width: 46,
        surface: 'SAND',
        lowEnd: {
          ident: '17',
          _id: '67307ccdb0cc813ff9be4f50'
        },
        highEnd: {
          ident: '35',
          _id: '67307ccdb0cc813ff9be4f51'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:28:45.050Z',
    coordinates: {
      latitude: -36.122624,
      longitude: -72.804916
    },
    elevation: 7,
    city: 'Cobquecura',
    countryCode: 'CL',
    county: 'CL-NB',
    state: 'CL-NB'
  },
  {
    name: 'Rio Do Sangue Airport',
    icao: 'SJYY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:50.714Z'
  },
  {
    name: 'Aerogardi Airport',
    icao: 'SWXD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:51.015Z'
  },
  {
    name: 'Orlando Sanford Intl',
    icao: 'KSFB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:51.320Z'
  },
  {
    name: "Montgomery's Flying M Ranch Airport",
    icao: 'FD49',
    runways: [
      {
        name: '0E',
        length: 4000,
        width: 100,
        surface: 'GRAVEL',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:20:50.805Z',
    city: 'Lake Panasoffkee',
    coordinates: {
      latitude: 28.77359962463379,
      longitude: -82.1304016113281
    },
    countryCode: 'US',
    county: 'US-FL',
    elevation: 70,
    state: 'US-FL'
  },
  {
    name: 'Finger Lakes Rgnl',
    icao: '0G7',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:35:18.609Z'
  },
  {
    name: 'Cistern Field',
    icao: 'MYX5',
    runways: [],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:08.471Z',
    city: 'Cistern Cay',
    coordinates: {
      latitude: 25.7787,
      longitude: -77.885201
    },
    countryCode: 'BS',
    county: 'BS-BY',
    elevation: 18,
    state: 'BS-BY'
  },
  {
    name: 'Osmany Intl',
    icao: 'VGSY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:57:16.856Z'
  },
  {
    name: 'Wabasis Lake Airport',
    icao: 'MI80',
    runways: [
      {
        name: '18',
        length: 2140,
        width: 80,
        surface: 'TURF',
        lowEnd: {
          ident: '18',
          _id: '67307dd2b0cc813ff9bedc3d'
        },
        highEnd: {
          ident: '36',
          _id: '67307dd2b0cc813ff9bedc3e'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:33:06.788Z',
    city: 'Greenville',
    coordinates: {
      latitude: 43.12839889526367,
      longitude: -85.3992004394531
    },
    countryCode: 'US',
    county: 'US-MI',
    elevation: 892,
    state: 'US-MI'
  },
  {
    name: 'Hoedspruit Airport',
    icao: 'FUIA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:01:14.627Z'
  },
  {
    name: 'Volkens Field',
    icao: '97IA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:53.950Z'
  },
  {
    name: 'Aviosuperficie Santo Stefano',
    icao: 'LIAK',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:54.333Z'
  },
  {
    name: 'McIntosh Municipal Airport',
    icao: '8D6',
    runways: [
      {
        name: '14',
        length: 3700,
        width: 150,
        surface: 'TURF-GRVL-F',
        lowEnd: {
          ident: '14',
          elevation: 2270,
          coordinates: {
            latitude: 45.91559982299805,
            longitude: -101.34700012207031
          },
          _id: '67307c67b0cc813ff9be18f9'
        },
        highEnd: {
          ident: '32',
          elevation: 2246,
          heading: 360,
          coordinates: {
            latitude: 45.906700134277344,
            longitude: -101.33899688720703
          },
          _id: '67307c67b0cc813ff9be18fa'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:27:03.395Z',
    city: 'McIntosh',
    coordinates: {
      latitude: 45.910833,
      longitude: -101.342927
    },
    countryCode: 'US',
    county: 'US-SD',
    elevation: 2251,
    state: 'US-SD'
  },
  {
    name: 'Alva Regl',
    icao: 'KAVK',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:13:19.370Z'
  },
  {
    name: 'Dalaman',
    icao: 'LTBS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:08:44.914Z',
    coordinates: {
      latitude: 36.713211,
      longitude: 28.79253
    },
    elevation: 15
  },
  {
    name: 'Centre Bush Aerodrome',
    icao: 'NZCB',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:19:39.277Z'
  },
  {
    name: 'Ladozhskaya Airport',
    icao: 'ULAY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:51:41.420Z'
  },
  {
    name: 'Kauer Private',
    icao: '3SD2',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:56.544Z'
  },
  {
    name: 'Devine Muni',
    icao: '23R',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:57.050Z'
  },
  {
    name: "Lee's",
    icao: 'WN89',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:57.485Z'
  },
  {
    name: 'Kenley Aerodrome',
    icao: 'EGKN',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:50:26.181Z'
  },
  {
    name: 'Pınarhisar Airport',
    icao: 'LTPI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:04:48.220Z',
    coordinates: {
      latitude: 41.631092,
      longitude: 27.487856
    },
    elevation: 550
  },
  {
    name: 'Fazenda Boa Esperança Airport',
    icao: 'SSBS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:08:12.424Z'
  },
  {
    name: 'Litomyšl Airstrip',
    icao: 'LKLM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:07:01.419Z'
  },
  {
    name: 'Posey Patch',
    icao: '59II',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:16:59.281Z'
  },
  {
    name: 'Mazabuka',
    icao: 'FLMZ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:09:06.196Z',
    coordinates: {
      latitude: -15.861335,
      longitude: 27.828157
    },
    elevation: 3383
  },
  {
    name: 'Fazenda Conforto',
    icao: 'SNLQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:06:46.223Z'
  },
  {
    name: 'Fronteira Airport',
    icao: 'SJFR',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:00.488Z'
  },
  {
    name: 'Koons Airport',
    icao: '8G8',
    runways: [
      {
        name: '09',
        length: 1850,
        width: 100,
        surface: 'TURF-G',
        lowEnd: {
          ident: '09',
          elevation: 1327,
          coordinates: {
            latitude: 40.88349914550781,
            longitude: -80.8864974975586
          },
          _id: '67307c55b0cc813ff9be0ef4'
        },
        highEnd: {
          ident: '27',
          elevation: 1327,
          coordinates: {
            latitude: 40.88330078125,
            longitude: -80.87979888916016
          },
          _id: '67307c55b0cc813ff9be0ef5'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:26:45.219Z',
    city: 'Salem',
    coordinates: {
      latitude: 40.882676,
      longitude: -80.880849
    },
    countryCode: 'US',
    county: 'US-OH',
    elevation: 1327,
    state: 'US-OH'
  },
  {
    name: 'Willow Creek Ranch Airport',
    icao: '10WY',
    runways: [
      {
        name: '05',
        length: 4500,
        width: 100,
        surface: 'GRASS',
        lowEnd: {
          ident: '05',
          _id: '67307d11b0cc813ff9be7402'
        },
        highEnd: {
          ident: '23',
          heading: 290,
          _id: '67307d11b0cc813ff9be7403'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:53.098Z',
    city: 'Kaycee',
    coordinates: {
      latitude: 43.423333,
      longitude: -106.823611
    },
    countryCode: 'US',
    county: 'US-WY',
    elevation: 5521,
    state: 'US-WY',
    websiteUrl: ''
  },
  {
    name: 'Voznesensk Air Base',
    icao: 'UKVO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:01.762Z'
  },
  {
    name: 'Didsbury (Canadian Skydive Cen',
    icao: 'CEC7',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:06:14.211Z',
    coordinates: {
      latitude: 51.63216,
      longitude: -114.109818
    },
    elevation: 3451
  },
  {
    name: 'Millers Flying Service Airport',
    icao: 'LA01',
    runways: [
      {
        name: '18',
        length: 1800,
        width: 30,
        surface: 'ASPH-P',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:20:09.832Z',
    city: 'Basile',
    coordinates: {
      latitude: 30.48349952697754,
      longitude: -92.54679870605469
    },
    countryCode: 'US',
    county: 'US-LA',
    elevation: 44,
    state: 'US-LA'
  },
  {
    name: 'Grabovnica',
    icao: 'LDZC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:57:07.437Z'
  },
  {
    name: 'El Porvenir Airport',
    icao: 'SKYL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:05:59.483Z',
    coordinates: {
      latitude: 5.193784,
      longitude: -72.402916
    },
    elevation: 775
  },
  {
    name: 'Donetsk Airport',
    icao: 'UKDT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:03.654Z'
  },
  {
    name: 'Mile Creek Airport',
    icao: '5CT7',
    runways: [
      {
        name: '02',
        length: 1800,
        width: 100,
        surface: 'TURF',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:17:59.547Z',
    city: 'Old Lyme',
    coordinates: {
      latitude: 41.30229949951172,
      longitude: -72.29620361328125
    },
    countryCode: 'US',
    county: 'US-CT',
    elevation: 30,
    state: 'US-CT'
  },
  {
    name: 'Redstone Army Air Field',
    icao: 'KHUA',
    runways: [
      {
        name: '17',
        length: 7300,
        width: 150,
        surface: 'ASP',
        elevation: 685,
        isClosed: false,
        isLighted: false,
        heading: 169,
        coordinates: {
          latitude: 34.688499450683594,
          longitude: -86.68699645996094
        }
      }
    ],
    frequencies: [
      {
        name: 'A/D',
        type: 'A/D',
        frequency: 118.05
      },
      {
        name: 'CTAF',
        type: 'CTAF',
        frequency: 126.95
      },
      {
        name: 'GCA',
        type: 'GCA',
        frequency: 124.8
      },
      {
        name: 'OPS',
        type: 'OPS',
        frequency: 126.2
      },
      {
        name: 'TWR',
        type: 'TWR',
        frequency: 126.95
      }
    ],
    updatedAt: '2024-11-09T20:17:39.989Z',
    city: 'Redstone Arsnl Huntsville',
    coordinates: {
      latitude: 34.67869949,
      longitude: -86.68479919
    },
    countryCode: 'US',
    county: 'US-AL',
    elevation: 684,
    state: 'US-AL',
    iata: 'HUA'
  },
  {
    name: 'Pioneer',
    icao: 'WS17',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:01:48.635Z',
    coordinates: {
      latitude: 43.985226,
      longitude: -88.576393
    },
    elevation: 826
  },
  {
    name: 'Bolzano Airport',
    icao: 'LIPB',
    runways: [
      {
        name: '01',
        length: 4698,
        width: 148,
        surface: 'ASP',
        lowEnd: {
          ident: '01',
          elevation: 771,
          heading: 10,
          coordinates: {
            latitude: 46.451515,
            longitude: 11.324127
          },
          _id: '67307cd6b0cc813ff9be5498'
        },
        highEnd: {
          ident: '19',
          elevation: 788,
          heading: 190,
          displacedThreshold: 200,
          coordinates: {
            latitude: 46.465027,
            longitude: 11.327637
          },
          _id: '67307cd6b0cc813ff9be5499'
        },
        isClosed: false,
        isLighted: false
      },
      {
        name: '01R',
        length: 2290,
        width: 66,
        surface: 'GRS',
        lowEnd: {
          ident: '01R',
          elevation: 773,
          heading: 10.6,
          coordinates: {
            latitude: 46.4546012878418,
            longitude: 11.326499938964844
          },
          _id: '67307cd6b0cc813ff9be549a'
        },
        highEnd: {
          ident: '19L',
          elevation: 782,
          heading: 190.6,
          coordinates: {
            latitude: 46.46080017089844,
            longitude: 11.328200340270996
          },
          _id: '67307cd6b0cc813ff9be549b'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [
      {
        name: 'AFIS',
        type: 'AFIS',
        frequency: 120.6
      }
    ],
    updatedAt: '2024-11-10T09:28:54.957Z',
    city: 'Bolzano (BZ)',
    coordinates: {
      latitude: 46.460201,
      longitude: 11.3264
    },
    countryCode: 'IT',
    county: 'IT-32',
    elevation: 789,
    iata: 'BZO',
    state: 'IT-32',
    websiteUrl: 'http://www.abd-airport.it/en/home.htm'
  },
  {
    name: 'Merrill Mun',
    icao: 'KRRL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:05.747Z'
  },
  {
    name: 'Umm Qasr Airport',
    icao: 'ORUQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:41:12.494Z'
  },
  {
    name: 'Grand Falls',
    icao: 'CCK3',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:59:31.999Z'
  },
  {
    name: 'Catarama Airport',
    icao: 'SECT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:22:21.929Z'
  },
  {
    name: 'Moravska Trebova',
    icao: 'LKMK',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:07.370Z'
  },
  {
    name: 'Lujan Airport',
    icao: 'SA53',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:16:16.490Z'
  },
  {
    name: 'Sandspit',
    icao: 'CYZP',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:11:17.864Z',
    coordinates: {
      latitude: 53.25428,
      longitude: -131.813904
    },
    elevation: 19
  },
  {
    name: 'Orocue Airport',
    icao: 'SXQY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:08.478Z'
  },
  {
    name: 'Majerle Strip',
    icao: 'WA17',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:08.867Z'
  },
  {
    name: 'Entrammes',
    icao: 'LFOV',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:09.303Z'
  },
  {
    name: 'Allen St Peter Memorial',
    icao: 'ME05',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:09.702Z'
  },
  {
    name: 'Pakse',
    icao: 'VLPS',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:04:18.457Z'
  },
  {
    name: 'Khancoban Airport',
    icao: 'YKHA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:10.428Z'
  },
  {
    name: 'Kennedy Intranational Airport',
    icao: '2GA0',
    runways: [
      {
        name: '10',
        length: 3900,
        width: 75,
        surface: 'TURF',
        lowEnd: {
          ident: '10',
          _id: '67307cd6b0cc813ff9be5476'
        },
        highEnd: {
          ident: '28',
          _id: '67307cd6b0cc813ff9be5477'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:28:54.650Z',
    city: 'Newborn',
    coordinates: {
      latitude: 33.5265007019043,
      longitude: -83.63800048828125
    },
    countryCode: 'US',
    county: 'US-GA',
    elevation: 695,
    state: 'US-GA'
  },
  {
    name: "Donald's Air Park Inc.",
    icao: '7NC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:17:07.523Z'
  },
  {
    name: 'Aknux',
    icao: 'NE38',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:11.511Z'
  },
  {
    name: 'Chiure Airport',
    icao: 'FQPA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:45:31.135Z'
  },
  {
    name: 'Itajaí/Campo Comandantes Airport',
    icao: 'SIJY',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:16:09.520Z'
  },
  {
    name: 'Pleasant Hill',
    icao: '98PA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:00:50.392Z'
  },
  {
    name: 'Morris Ranch',
    icao: '79TA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:55:46.448Z'
  },
  {
    name: 'Moose Creek Farm Airport',
    icao: '53WI',
    runways: [
      {
        name: '03',
        length: 2162,
        width: 75,
        surface: 'TURF',
        lowEnd: {
          ident: '03',
          _id: '67307dcbb0cc813ff9bed87a'
        },
        highEnd: {
          ident: '21',
          _id: '67307dcbb0cc813ff9bed87b'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:32:59.716Z',
    city: 'Argyle',
    coordinates: {
      latitude: 42.698101,
      longitude: -89.786796
    },
    countryCode: 'US',
    county: 'US-WI',
    elevation: 1025,
    state: 'US-WI'
  },
  {
    name: 'Aldeia Kubenkroke Airport',
    icao: 'SDWJ',
    runways: [
      {
        name: '07',
        length: 2953,
        width: 59,
        surface: 'GRS',
        lowEnd: {
          ident: '07',
          _id: '67307d0bb0cc813ff9be70ed'
        },
        highEnd: {
          ident: '25',
          _id: '67307d0bb0cc813ff9be70ee'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:47.267Z',
    city: 'Altamira',
    coordinates: {
      latitude: -8.7252779006958,
      longitude: -53.390277862549
    },
    countryCode: 'BR',
    county: 'BR-PA',
    elevation: 1099,
    state: 'BR-PA'
  },
  {
    name: 'Dawson Muni',
    icao: '16J',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:14.297Z'
  },
  {
    name: 'Vinsebeck Airfield',
    icao: 'EDJH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:59:42.330Z'
  },
  {
    name: 'Kisoro Airport',
    icao: 'HUKI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:08:52.676Z',
    coordinates: {
      latitude: -1.283689,
      longitude: 29.719637
    },
    elevation: 6130
  },
  {
    name: 'Thomas Farms Airport',
    icao: '85FL',
    runways: [
      {
        name: '09',
        length: 2200,
        width: 100,
        surface: 'TURF',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T17:02:19.913Z',
    coordinates: {
      latitude: 30.96929931640625,
      longitude: -87.05159759521484
    },
    elevation: 215,
    city: 'Jay',
    countryCode: 'US',
    county: 'US-FL',
    state: 'US-FL'
  },
  {
    name: 'Patterson Island',
    icao: 'GA21',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:17:35.813Z'
  },
  {
    name: 'Korba Airport',
    icao: 'VAKO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:14:31.908Z'
  },
  {
    name: 'Mitchell Municipal Airport',
    icao: 'KMHE',
    runways: [
      {
        name: '12',
        length: 6700,
        width: 100,
        surface: 'ASP',
        lowEnd: {
          ident: '12',
          elevation: 1296,
          heading: 134.4,
          coordinates: {
            latitude: 43.78089904785156,
            longitude: -98.05149841308594
          },
          _id: '67307cdab0cc813ff9be566c'
        },
        highEnd: {
          ident: '30',
          elevation: 1303,
          heading: 314.4,
          coordinates: {
            latitude: 43.76810073852539,
            longitude: -98.03340148925781
          },
          _id: '67307cdab0cc813ff9be566d'
        },
        isClosed: false,
        isLighted: false
      },
      {
        name: '17',
        length: 5512,
        width: 100,
        surface: 'ASP',
        lowEnd: {
          ident: '17',
          elevation: 1283,
          heading: 179.6,
          coordinates: {
            latitude: 43.782798767089844,
            longitude: -98.03399658203125
          },
          _id: '67307cdab0cc813ff9be566e'
        },
        highEnd: {
          ident: '35',
          elevation: 1303,
          heading: 359.6,
          coordinates: {
            latitude: 43.767601013183594,
            longitude: -98.03389739990234
          },
          _id: '67307cdab0cc813ff9be566f'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [
      {
        name: 'ASOS',
        type: 'ASOS',
        frequency: 124.175
      },
      {
        name: 'RDO',
        type: 'RDO',
        frequency: 122.3
      },
      {
        name: 'UNIC',
        type: 'UNIC',
        frequency: 122.8
      }
    ],
    updatedAt: '2024-11-10T09:28:58.294Z',
    city: 'Mitchell',
    coordinates: {
      latitude: 43.774799346900004,
      longitude: -98.03859710690001
    },
    countryCode: 'US',
    county: 'US-SD',
    elevation: 1304,
    iata: 'MHE',
    state: 'US-SD',
    websiteUrl:
      'http://www.cityofmitchell.org/index.asp?SEC=0E5EB6F8-1E38-48AD-8D27-2CDD01C4E949&Type=B_BASIC'
  },
  {
    name: 'Worthington Mun',
    icao: 'KOTG',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:16.839Z'
  },
  {
    name: 'Haelogo Airport',
    icao: 'HEO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:43:55.019Z'
  },
  {
    name: 'Hatuey Airport',
    icao: 'MUSI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:17.693Z'
  },
  {
    name: 'Subtanjalla Airport',
    icao: 'SPLH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:09:52.387Z',
    coordinates: {
      latitude: -14.035231,
      longitude: -75.760269
    },
    elevation: 1358
  },
  {
    name: 'Dudley',
    icao: '79MI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:57:41.483Z'
  },
  {
    name: 'Rybany Airstrip',
    icao: 'LZBN',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:18.953Z'
  },
  {
    name: 'Garimbo Tocantinzinho Airport',
    icao: 'SNFL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:19.339Z'
  },
  {
    name: 'Tahlequah Mun',
    icao: 'KTQH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:19.657Z'
  },
  {
    name: 'Sunset Air Strip',
    icao: '1OR3',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-20T14:53:41.650Z',
    city: 'North Plains',
    coordinates: {
      latitude: 45.591499,
      longitude: -123.010002
    },
    countryCode: 'US',
    county: 'US-OR',
    elevation: 207,
    state: 'US-OR',
    websiteUrl: ''
  },
  {
    name: 'Xigera Airport',
    icao: 'FBXI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-11-09T20:19:58.908Z',
    city: 'Xigera',
    coordinates: {
      latitude: -19.385485,
      longitude: 22.737648
    },
    countryCode: 'BW',
    county: 'BW-NW',
    elevation: 3170,
    state: 'BW-NW'
  },
  {
    name: 'Letneozerskiy Air Base',
    icao: 'USAO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:20.753Z'
  },
  {
    name: 'Goshen Muni',
    icao: 'KGSH',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:21.118Z'
  },
  {
    name: 'Los Gavanes Airport',
    icao: 'SKRV',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:15:15.194Z'
  },
  {
    name: 'Wittenoom Airport',
    icao: 'YWIT',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:43:04.158Z'
  },
  {
    name: 'Hauna Airstrip',
    icao: 'AYHQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:01:54.882Z'
  },
  {
    name: 'Reeder',
    icao: 'NJ64',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:17:03.158Z'
  },
  {
    name: 'Turlock Airpark',
    icao: '9CL0',
    runways: [
      {
        name: '13',
        length: 2075,
        width: 60,
        surface: 'ASPH-P',
        lowEnd: {
          ident: '13',
          displacedThreshold: 440,
          _id: '67307d07b0cc813ff9be6ef3'
        },
        highEnd: {
          ident: '31',
          heading: 269.3,
          displacedThreshold: 300,
          _id: '67307d07b0cc813ff9be6ef4'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:43.599Z',
    city: 'Turlock',
    coordinates: {
      latitude: 37.47079849243164,
      longitude: -120.84400177001953
    },
    countryCode: 'US',
    county: 'US-CA',
    elevation: 100,
    state: 'US-CA'
  },
  {
    name: 'Grant Co Regl/Ogilvie',
    icao: 'KGCD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:30:56.439Z'
  },
  {
    name: 'Las Brisas Airport',
    icao: 'SKDZ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:03:26.195Z'
  },
  {
    name: 'Flatrock Air Strip',
    icao: '0VA7',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-20T14:52:43.947Z',
    city: 'Richmond',
    coordinates: {
      latitude: 37.52320098876953,
      longitude: -77.81939697265625
    },
    countryCode: 'US',
    county: 'US-VA',
    elevation: 425,
    state: 'US-VA',
    websiteUrl: ''
  },
  {
    name: 'Curumani Airport',
    icao: 'SK35',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:11:47.162Z',
    coordinates: {
      latitude: 9.213037,
      longitude: -73.571777
    },
    elevation: 149
  },
  {
    name: 'Hayward Executive',
    icao: 'KHWD',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:24.901Z'
  },
  {
    name: 'Wauseon Airport',
    icao: 'KWAM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:25.304Z'
  },
  {
    name: 'Brookings State',
    icao: 'KBOK',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:52:18.886Z'
  },
  {
    name: 'Upton Mun',
    icao: '83V',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:26.179Z'
  },
  {
    name: 'Kakamas Airport',
    icao: 'FAOO',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:26.841Z'
  },
  {
    name: 'Aviosuperficie Rinaura',
    icao: 'LICI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:11:06.615Z'
  },
  {
    name: 'Kipnuk',
    icao: 'PAKI',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:27.661Z'
  },
  {
    name: 'Blair Mun',
    icao: 'K46',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T16:59:09.912Z'
  },
  {
    name: 'Aviosuperficie Massalengo',
    icao: 'LIOJ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:07:30.807Z'
  },
  {
    name: 'Fazenda Varginha Airport',
    icao: 'SIYX',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:29.012Z'
  },
  {
    name: 'Atizapan De Zaragoza',
    icao: 'MMJC',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:11:03.388Z',
    coordinates: {
      latitude: 19.574619,
      longitude: -99.289169
    },
    elevation: 8120
  },
  {
    name: 'Windarra Airport',
    icao: 'YWDA',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:29.728Z'
  },
  {
    name: 'Sitalike Airport',
    icao: 'HTNE',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:30.200Z'
  },
  {
    name: 'Fazenda Sao Judas Tadeu',
    icao: 'SB3S',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:08:03.338Z',
    coordinates: {
      latitude: -12.627896,
      longitude: -60.900127
    },
    elevation: 946
  },
  {
    name: 'Massey Aerodrome',
    icao: 'MD1',
    runways: [
      {
        name: '02',
        length: 3000,
        width: 100,
        surface: 'TURF-G',
        lowEnd: {
          ident: '02',
          coordinates: {
            latitude: 39.2953987121582,
            longitude: -75.80069732666016
          },
          _id: '67307cf4b0cc813ff9be6481'
        },
        highEnd: {
          ident: '20',
          coordinates: {
            latitude: 39.30329895019531,
            longitude: -75.79810333251953
          },
          _id: '67307cf4b0cc813ff9be6482'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:29:24.173Z',
    city: 'Massey',
    coordinates: {
      latitude: 39.299198,
      longitude: -75.7994
    },
    countryCode: 'US',
    county: 'US-MD',
    elevation: 73,
    state: 'US-MD'
  },
  {
    name: 'Fazenda Quebracho Brasil Airport',
    icao: 'SDMQ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:31.334Z'
  },
  {
    name: 'Fermignano Airport',
    icao: 'LIJZ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:31.742Z'
  },
  {
    name: 'Blackhawk Island Airport',
    icao: '1WI9',
    runways: [
      {
        name: '18',
        length: 1950,
        width: 80,
        surface: 'TURF',
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-09T20:21:12.310Z',
    city: 'Fort Atkinson',
    coordinates: {
      latitude: 42.910672,
      longitude: -88.8694
    },
    countryCode: 'US',
    county: 'US-WI',
    elevation: 800,
    state: 'US-WI',
    websiteUrl: ''
  },
  {
    name: 'Sweetwater (Usmc)',
    icao: 'NV72',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T21:09:02.924Z',
    coordinates: {
      latitude: 38.51001,
      longitude: -119.21698
    },
    elevation: 6837
  },
  {
    name: 'Quz South',
    icao: 'OE48',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:05:35.183Z'
  },
  {
    name: 'Breeden Airport',
    icao: 'AK05',
    runways: [
      {
        name: '17',
        length: 800,
        width: 50,
        surface: 'GRVL',
        lowEnd: {
          ident: '17',
          _id: '67307c3eb0cc813ff9be0260'
        },
        highEnd: {
          ident: '35',
          _id: '67307c3eb0cc813ff9be0261'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-10T09:26:22.035Z',
    city: 'Sterling',
    coordinates: {
      latitude: 60.54234,
      longitude: -150.598612
    },
    countryCode: 'US',
    county: 'US-AK',
    elevation: 365,
    state: 'US-AK'
  },
  {
    name: 'Billabalong Airport',
    icao: 'YBBL',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:33.582Z'
  },
  {
    name: 'Russell',
    icao: 'SC17',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:27:58.734Z'
  },
  {
    name: 'Selinda Old Airport',
    icao: 'FYKU',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T18:09:25.533Z'
  },
  {
    name: 'Monmouth Executive',
    icao: 'KBLM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:34.639Z'
  },
  {
    name: 'Ta Lo De Soto',
    icao: 'MM29',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:35.039Z'
  },
  {
    name: 'Macklin Airport',
    icao: 'CJJ8',
    runways: [
      {
        name: '11',
        length: 3000,
        width: 75,
        surface: 'ASP',
        lowEnd: {
          ident: '11',
          heading: 123,
          coordinates: {
            latitude: 52.345001220703125,
            longitude: -109.92400360107422
          },
          _id: '67307d85b0cc813ff9beb33f'
        },
        highEnd: {
          ident: '29',
          heading: 303,
          coordinates: {
            latitude: 52.340599060058594,
            longitude: -109.91300201416016
          },
          _id: '67307d85b0cc813ff9beb340'
        },
        isClosed: false,
        isLighted: false
      }
    ],
    frequencies: [
      {
        name: 'ATF',
        type: 'ATF',
        frequency: 123.2
      }
    ],
    updatedAt: '2024-11-10T09:31:49.698Z',
    city: 'Macklin',
    coordinates: {
      latitude: 52.343616,
      longitude: -109.920215
    },
    countryCode: 'CA',
    county: 'CA-SK',
    elevation: 2280,
    state: 'CA-SK'
  },
  {
    name: 'Montignac Airport',
    icao: 'LFZJ',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:35.725Z'
  },
  {
    name: 'Medina River Ranch',
    icao: 'XS43',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:57:30.816Z'
  },
  {
    name: 'Fazenda Palmital Airport',
    icao: 'SIAM',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-07T19:17:36.440Z'
  },
  {
    name: 'Alto Paraguai',
    icao: 'SWAU',
    runways: [],
    frequencies: [],
    updatedAt: '2024-10-10T17:30:15.013Z'
  },
  {
    name: 'Crystal Lakes Airport',
    icao: '25CO',
    runways: [
      {
        name: '07',
        length: 4225,
        width: 40,
        surface: 'DIRT'
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-08T20:09:55.489Z',
    city: 'Red Feather Lakes',
    coordinates: {
      latitude: 40.851600646972656,
      longitude: -105.63300323486328
    },
    countryCode: 'US',
    county: 'US-CO',
    elevation: 8440,
    state: 'US-CO'
  },
  {
    name: 'South Fork Ranch Airport',
    icao: '0ID0',
    runways: [
      {
        name: '07',
        length: 3000,
        width: 80,
        surface: 'TURF'
      }
    ],
    frequencies: [],
    updatedAt: '2024-11-08T20:09:36.282Z',
    city: 'Featherville',
    coordinates: {
      latitude: 43.60639953613281,
      longitude: -115.10700225830078
    },
    countryCode: 'US',
    county: 'US-ID',
    elevation: 4861,
    state: 'US-ID',
    websiteUrl: ''
  }
]
</script>
