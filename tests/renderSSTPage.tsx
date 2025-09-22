import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import SSTPage from '../src/pages/formations/secourisme/SSTPage';

export function renderSSTPage() {
  const helmetContext = {};

  return renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter>
        <SSTPage />
      </MemoryRouter>
    </HelmetProvider>
  );
}
