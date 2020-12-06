import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Markdown, ThemeProvider } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Markdown',
  component: Markdown,
} as Document; 

export const overview: Example = () => (
  <ThemeProvider>
    <Markdown>{`
# Header H1
## Header H2
### Header H3
#### Header H4
##### Header H5

some text 

\`@theme-ui\`    
`}</Markdown>
  </ThemeProvider>
);

export const image: Example = () => (
  <ThemeProvider>
    <Markdown>
      ![integrated in
      storybook](https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/images/component-controls.gif)
    </Markdown>
  </ThemeProvider>
);
