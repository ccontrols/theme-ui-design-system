/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, AspectImage, AspectImageProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/AspectImage',
  component: AspectImage,
} as Document;

export const overview: Example<AspectImageProps> = ({ src, ratio }) => (
  <Box sx={{ width: 100, height: 80 }}>
    <AspectImage ratio={ratio} src={src} />
  </Box>
);

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/id/133/128/128',
  },
  ratio: { type: ControlTypes.NUMBER, min: 0, max: 4, value: 4 / 3, step: 0.5 },
};
