/* eslint-disable react/display-name */
import React from 'react';
import {
  Story,
  Description,
} from '@component-controls/blocks';
import { ThemeProvider } from 'theme-ui';
import {
  HoverBox,
} from '@component-controls/components';

import * as themes from '@theme-ui/presets';

export const ThemesPage = () => {
  return (
    <>
      <Description />
      {Object.keys(themes).map(themeName => (
        <HoverBox key={themeName} label={themeName}>
        <ThemeProvider  theme={themes[themeName]}>
          <Story id="."  sxStyle={{ mb: 0 }}/>
        </ThemeProvider>
        </HoverBox>
      ))}
    </>
  );
}

