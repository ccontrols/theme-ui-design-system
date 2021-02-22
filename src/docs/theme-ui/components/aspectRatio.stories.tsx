/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, AspectRatio, AspectRatioProps, Heading } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/AspectRatio',
  component: AspectRatio,
 category: 'Containers',
} as Document;

export const overview: Example<AspectRatioProps> = ({ ratio }) => (
  <Box sx={{ width: 100, height: 80 }}>
    <AspectRatio ratio={ratio}>
      <Heading>Aspect Ratio</Heading>
    </AspectRatio>
  </Box>
);

overview.controls = {
  ratio: { type: ControlTypes.NUMBER, min: 0, max: 4, value: 4 / 3, step: 0.5 },
};
