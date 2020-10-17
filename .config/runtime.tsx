import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { TestingPage } from './TestingPage';
import { ThemesPage } from './ThemesPage';

const config: RunOnlyConfiguration =  {
  siteTitle: `theme-ui components`,
  siteDescription: `Collection of theme-ui and external components.`,
  author: 'component-controls',
  components: {
    playground: {
      openTab: 'source',
    }
  },
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Testing', render: () => <TestingPage /> },
        { title: 'Themes', render: () => <ThemesPage /> },
      ],
    },
  }
};

export default config;