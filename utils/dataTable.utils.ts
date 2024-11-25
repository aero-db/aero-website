import type { Airport, APIQueryParameters, APIResource, ResourceFilter } from '@aerodb/js';
import type { DataTableFilterMeta, DataTableFilterMetaData, DataTableSortMeta } from 'primevue/datatable';
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router';

/**
 * Maps the primevue comparator to the aero api comparator
 * @param comparator the primevue comparator
 * @returns the aero api comparator
 * @example  equals -> eq
 */
function mapPrimeComparatorToAeroComparator(comparator: string): string {
  const comparatorMap: { [key: string]: string } = {
    equals: 'eq',
    notEquals: 'ne',
    gt: 'gt',
    gte: 'gte',
    lt: 'lt',
    lte: 'lte',
    between: 'bt',
    in: 'in',
    contains: 'like',
    startsWith: 'like',
    endsWith: 'like',
    notContains: 'ne',
    dateIs: 'eq',
    dateIsNot: 'ne',
    dateBefore: 'lt',
    dateAfter: 'gt',
  };

  return comparatorMap[comparator] || comparator;
}

/**
 * Maps the aero api comparator to the primevue comparator
 * @param comparator the aero api comparator
 * @returns the primevue comparator
 * @example  eq -> equals
 */
function mapAeroComparatorToPrimeComparator(comparator: string): string {
  const comparatorMap: { [key: string]: string } = {
    eq: 'equals',
    ne: 'notEquals',
    gt: 'gt',
    gte: 'gte',
    lt: 'lt',
    lte: 'lte',
    bt: 'between',
    in: 'in',
    like: 'contains',
  };

  return comparatorMap[comparator] || comparator;
}

/**
 * Converts a primevue filter to a aero api filter
 * @param primeFilter the primevue filter
 * @returns the aero api filter
 */
export function convertPrimeFilterToAeroFilter<T extends APIResource>(primeFilter: DataTableFilterMeta): ResourceFilter<T> {
  // generate a default temp filter for the api
  const tempFilter: {
    [key: string]: { [key: string]: string | number };
  } = {};

  // loop through the primeFilter
  for (const key in primeFilter) {
    const filter = primeFilter[key] as DataTableFilterMetaData;

    // skip if the filter value is empty (nothing to filter)
    if (filter.value === undefined || filter.value === null || filter.value === '') continue;
    if (!filter.matchMode) continue;

    // match the primeFilter format the the api format
    const comparator = mapPrimeComparatorToAeroComparator(filter.matchMode);
    tempFilter[key] = {
      [comparator]: filter.value,
    };
  }
  return tempFilter as ResourceFilter<Airport>;
}

/**
 * Converts a aero api filter to a primevue filter
 * @param aeroFilter the aero api filter
 * @param defaultFilter Fallback filter
 * @returns the primevue filter
 */
export function convertAeroFilterToPrimeFilter<T extends APIResource>(
  aeroFilter: ResourceFilter<T>,
  defaultFilter: DataTableFilterMeta
): DataTableFilterMeta {
  const primeFilter: DataTableFilterMeta = JSON.parse(JSON.stringify(defaultFilter));

  /*
   * loop through the aeroFilter
   * Example of filter : { filter: { key1: {eq: 1}, key2: {lt: 50} } }
   */

  /*
   * resourceKey -> ex: shipmentId
   * loop through the keys of the filter
   */

  for (const resourceKey in aeroFilter) {
    const key = resourceKey as keyof T;
    const entry = (aeroFilter as Record<string, string | number>)[resourceKey];
    const comparator = Object.keys(entry)[0] as keyof typeof entry;
    // comparator converter to prime format
    const comparatorType = mapAeroComparatorToPrimeComparator(comparator);
    const value = entry[comparator];

    primeFilter[String(key)] = {
      value,
      matchMode: comparatorType,
    };

    /*
     * comparatorType -> ex: eq
     * if (Object.prototype.hasOwnProperty.call(resourceKey, comparatorType)) {
     *   const comparator = mapAeroComparatorToPrimeComparator(comparatorType);
     *   const value = (resourceKey as Record<string, string | number>)[comparatorType];
     */

    /*
     *   // add the filter to the primeFilter
     *   if (primeFilter[comparator]) {
     *     primeFilter[comparator] = { value, matchMode: comparator };
     *   }
     * }
     */
  }

  if (Object.keys(primeFilter).length === 0) {
    return defaultFilter;
  }

  return primeFilter;
}

/**
 * Converts a primevue sorter to a aero api sorter
 * @param primeSorter the primevue sorter
 * @returns  aeroSorter
 */
export function convertPrimeSorterToAeroSorter(primeSorter?: DataTableSortMeta[] | null): { [key: string]: 1 | -1 } {
  if (!primeSorter) return {};

  const aeroSorter: { [key: string]: 1 | -1 } = {};
  for (const entry of primeSorter) {
    if (!entry.field) continue;
    aeroSorter[String(entry.field)] = entry.order === 1 ? 1 : -1;
  }
  return aeroSorter;
}

/**
 * Converts a aero api sorter to a primevue sorter
 * @param aeroSorter  the aero api sorter
 * @returns  primeSorter
 */
export function convertAeroSorterToPrimeSorter(aeroSorter: { [key: string]: 1 | -1 }): DataTableSortMeta[] {
  const primeSorter: DataTableSortMeta[] = [];
  for (const key in aeroSorter) {
    if (Object.prototype.hasOwnProperty.call(aeroSorter, key)) {
      const value = aeroSorter[key];
      primeSorter.push({ field: key, order: value === 1 ? 1 : -1 });
    }
  }
  return primeSorter;
}

/**
 * Retreive the data table parameters from the current route query
 * @param route the current route object
 * @returns the data table parameters in Aero API format
 */
export function getAeroParametersFromRoute<T extends APIResource>(route: RouteLocationNormalizedLoadedGeneric): APIQueryParameters<T> {
  /**
   * Default items limit
   */
  const DEFAULT_LIMIT = 100;
  /**
   * Default items offset
   */
  const DEFAULT_PAGE = 1;

  let filter = route.query.filter ? JSON.parse(String(route.query.filter)) : undefined;
  let sort = route.query.sort ? JSON.parse(String(route.query.sort)) : undefined;
  const limit = route.query.limit ? Number(route.query.limit) : DEFAULT_LIMIT;
  const page = route.query.page ? Number(route.query.page) : DEFAULT_PAGE;

  // remove empty objects
  if (filter && Object.keys(filter).length === 0) {
    filter = undefined;
  }

  if (sort && Object.keys(sort).length === 0) {
    sort = undefined;
  }

  return {
    sort,
    filter,
    limit,
    page,
  };
}
