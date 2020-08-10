import React from 'react';
import { Box, Button } from 'theme-ui';
import { Collapsible, CollapsibleProps } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Collapsible',
  component: Collapsible,
};

export const overview = ({ easing }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'close' : 'open'}
      </Button>
      <Collapsible isOpen={isOpen} easing={easing}>
        content
      </Collapsible>
    </Box>
  );
};

overview.story = {
  smartControls: {
    smart: false,
  },
  controls: {
    easing: {
      type: 'options',
      options: ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'],
    },
  },
};
