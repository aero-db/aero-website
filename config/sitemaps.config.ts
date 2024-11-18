import type { Airport } from '@aerodb/js';

export const sitemapConfig = {
  sitemaps: {
    airportsA: {
      urls: async () => {
        // fetch your URLs from a database or other source
        const data = await fetch('https://api.aerodb.net/airports/all?limit=20000');
        const res = await data.json();
        return res.map((airport: Airport) => `/airport/${airport.airportId}`);
      },
    },
    airportsB: {
      urls: async () => {
        // fetch your URLs from a database or other source
        const data = await fetch('https://api.aerodb.net/airports/all?limit=20000&page=2');
        const res = await data.json();
        return res.map((airport: Airport) => `/airport/${airport.airportId}`);
      },
    },
    airportsC: {
      urls: async () => {
        // fetch your URLs from a database or other source
        const data = await fetch('https://api.aerodb.net/airports/all?limit=20000&page=3');
        const res = await data.json();
        return res.map((airport: Airport) => `/airport/${airport.airportId}`);
      },
    },
    airportsD: {
      urls: async () => {
        // fetch your URLs from a database or other source
        const data = await fetch('https://api.aerodb.net/airports/all?limit=20000&page=4');
        const res = await data.json();
        return res.map((airport: Airport) => `/airport/${airport.airportId}`);
      },
    },
    airportsE: {
      urls: async () => {
        // fetch your URLs from a database or other source
        const data = await fetch('https://api.aerodb.net/airports/all?limit=20000&page=5');
        const res = await data.json();
        return res.map((airport: Airport) => `/airport/${airport.airportId}`);
      },
    },
  },
};
