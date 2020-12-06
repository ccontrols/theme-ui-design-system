import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { Link } from "@component-controls/components";
import { defaultLinks } from "@component-controls/app";
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
  links: [...defaultLinks, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700,900|Roboto:400,600|Architects+Daughter:400,600|Segoe+UI:400,700|Helvetica+Neue:400,700|Arial:400,700|Noto+Sans:400,700|Avenir+Next:400,700",
  }],
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