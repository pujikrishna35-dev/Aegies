import { useState, useMemo } from 'react';
import { University } from '../types/university';

export const useUniversitySearch = (initialList: University[] = []) => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('All');

  const filtered = useMemo(() => {
    return initialList.filter((uni) => {
      const matchesCountry = country === 'All' || uni.country.toLowerCase() === country.toLowerCase();
      const matchesQuery = !query || uni.name.toLowerCase().includes(query.toLowerCase()) || uni.city.toLowerCase().includes(query.toLowerCase());
      return matchesCountry && matchesQuery;
    });
  }, [initialList, query, country]);

  return { query, setQuery, country, setCountry, filtered };
};
