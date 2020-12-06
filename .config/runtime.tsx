import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { Link } from "@component-controls/components";
import { TestingPage } from './TestingPage';
import { ThemesPage } from './ThemesPage';

const config: RunOnlyConfiguration =  {
  title: `theme-ui components`,
  description: `Collection of theme-ui and external components.`,
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
  },
  toolbar: {
    right: [
      {
        node: (
          <Link href="https://theme-ui.com">
            Theme UI
          </Link>
        ),
      }
    ]
  }
};

export default config;