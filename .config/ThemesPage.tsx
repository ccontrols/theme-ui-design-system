/* eslint-disable react/display-name */
import React from 'react';
import { TabConfiguration } from  '@component-controls/core';
import {
  Story,
  Description,
} from '@component-controls/blocks';
import { ThemeProvider } from 'theme-ui';
import { BlockContainer } from '@component-controls/components';
import { useThemes } from '../src/components/useThemes';

const ThemesPage = () => {
  const themes = useThemes();
  return (
    <>
      <Description />
      {themes.map(({ name, theme }) => (
        <BlockContainer key={`themed_component_${name}`} title={name} id={name} sx={{ mt: 0 }}>
          <ThemeProvider  theme={theme}>
            <Story id="."sx={{ mb: 0, ...theme?.styles?.root }}/>
          </ThemeProvider>
        </BlockContainer>
      ))}
    </>
  );
}

export default {
  title: 'Themes',
  component: ThemesPage
} as TabConfiguration  