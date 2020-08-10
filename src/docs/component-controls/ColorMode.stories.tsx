import React from 'react';
import { ThemeProvider, ColorMode } from '@component-controls/components';

export default {
  title: 'Components/component-controls/ColorMode',
  component: ColorMode,
};

export const overview = () => (
  <ThemeProvider>
    <ColorMode />
  </ThemeProvider>
);
