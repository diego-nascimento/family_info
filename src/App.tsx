import React from 'react';
import { AppNavigation } from './Routes';
import { PersonsProvider } from './shared/Contexts';

export const App = () => {
  return (
    <PersonsProvider>
      <AppNavigation />
    </PersonsProvider>
  );
};
