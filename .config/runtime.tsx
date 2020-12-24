import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { Link } from "@component-controls/components";
import { defaultLinks } from "@component-controls/app";

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
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700,900|Roboto:400,600|Architects+Daughter",
  }],
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