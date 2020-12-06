import React from 'react';
import { Donut } from 'theme-ui';
import { Document, Example } from '@component-controls/core';
import { Zoom, ActionContainer } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Zoom',
  component: Zoom,
} as Document;

export const overview: Example = () => {
  const [scale, setScale] = React.useState(1);
  return (
    <ActionContainer
      actions={[
        {
          node: 'reset',
          onClick: () => setScale(1),
        },
        {
          node: 'zoom out',
          onClick: () => setScale(scale / 2),
        },
        {
          node: 'zoom in',
          onClick: () => setScale(scale * 2),
        },
      ]}
    >
      <Zoom scale={scale}>
        <Donut value={1 / 2} />
      </Zoom>
    </ActionContainer>
  );
};
