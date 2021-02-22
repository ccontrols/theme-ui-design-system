import React, { useState } from 'react';
import { Document, Example } from '@component-controls/core';
import { Donut, Box } from 'theme-ui';
import { Zoom, ActionContainer } from '@component-controls/components';
  
export default {
  title: 'component-controls/Zoom',
  component: Zoom,
  category: 'Display',
} as Document;

export const overview: Example = () => {
  const [scale, setScale] = useState(1);
  return (
    <Box style={{ width: '100%' }}>
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
        <Box sx={{ mt: '30px' }}>
          <Zoom scale={scale}>
            <Donut value={1 / 2} />
          </Zoom>
        </Box>
      </ActionContainer>
    </Box>
  );
};
