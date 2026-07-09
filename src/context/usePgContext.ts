import { useContext } from 'react';
import { PgContext } from './PgContext';

export function usePgContext() {
  const context = useContext(PgContext);
  if (context == null) {
    throw new Error('context should be under pg provider');
  }
  return context;
}
