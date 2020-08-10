/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, AspectRatio, Heading } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/AspectRatio',
  component: AspectRatio,
};

export const overview = ({ ratio }) => (
  <Box sx={{ width: 100, height: 80 }}>
    <AspectRatio ratio={ratio}>
      <Heading>Aspect Ratio</Heading>
    </AspectRatio>
  </Box>
);

overview.controls = {
  ratio: { type: ControlTypes.NUMBER, min: 0, max: 4, value: 4 / 3, step: 0.5 },
};
