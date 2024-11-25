import type { APIQueryParameters, APIResource } from '@aerodb/js';

/**
 * Represent a parameters preset available to the users
 */
export type TablePreset<T extends APIResource> = {
  /**
   * Display label
   */
  label: string;
  parameters: APIQueryParameters<T>;
};
