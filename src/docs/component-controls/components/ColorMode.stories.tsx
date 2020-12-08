import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ThemeProvider, ColorMode } from '@component-controls/components';

export default {
  title: 'component-controls/ColorMode',
  component: ColorMode,
} as Document;

export const overview: Example = () => (
  <ThemeProvider>
    <ColorMode />
  </ThemeProvider>
);
