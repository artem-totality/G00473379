import queryString from 'query-string';

const getStringifiedQuery = (query: Record<string, unknown>): string =>
  queryString.stringify(query, { arrayFormat: 'comma' });

export { getStringifiedQuery };
