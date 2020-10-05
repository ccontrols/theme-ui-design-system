/* eslint-disable react/display-name */
import React from 'react';
import {
  Story,
  Description,
} from '@component-controls/blocks';
import { ThemeProvider } from 'theme-ui';
import { BlockContainer } from '@component-controls/components';
import { useThemes } from '../src/components/useThemes';

export const ThemesPage = () => {
  const themes = useThemes();
  return (
    <>
      <Description />
      {themes.map(({ name, theme }) => (
        <BlockContainer key={`themed_component_${name}`} title={name} id={name} sxStyle={{ mt: 0 }}>
          <ThemeProvider  theme={theme}>
              <Story id="."  sxStyle={{ mb: 0, ...theme?.styles?.root }}/>
          </ThemeProvider>
        </BlockContainer>
      ))}
    </>
  );
}

