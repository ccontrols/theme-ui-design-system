import React from 'react';
import { Donut } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { BlockContainer, BlockContainerProps, ThemeProvider } from '@component-controls/components';

export default {
  title: 'component-controls/BlockContainer',
  component: BlockContainer,
} as Document;

export const overview: Example<BlockContainerProps> = ({ title }) => {
  return (
    <BlockContainer title={title}>
      <Donut value={1 / 2} />
    </BlockContainer>
  );
};

overview.controls = {
  title: { type: ControlTypes.TEXT, value: 'Block title' },
};

export const notCollapsible: Example = () => {
  return (
    <BlockContainer title="BlockContainer" collapsible={false}>
      <Donut value={1 / 2} />
    </BlockContainer>
  );
};

export const customId: Example = () => {
  return (
    <BlockContainer title="BlockContainer" id="custom-id">
      <Donut value={1 / 2} />
    </BlockContainer>
  );
};

export const description: Example = () => {
  return (
    <ThemeProvider>
      <BlockContainer
        description={`
### H3 title

*Markdown*

[google](https://www.google.com)
`}
      >
        <Donut value={1 / 2} />
      </BlockContainer>
    </ThemeProvider>
  );
};
