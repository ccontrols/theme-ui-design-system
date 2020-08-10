/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, AspectImage } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/AspectImage',
  component: AspectImage,
};

export const overview = ({ src, ratio }) => (
  <Box sx={{ width: 100, height: 80 }}>
    <AspectImage ratio={ratio} src={src} />
  </Box>
);

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://s3.amazonaws.com/uifaces/faces/twitter/tumski/128.jpg',
  },
  ratio: { type: ControlTypes.NUMBER, min: 0, max: 4, value: 4 / 3, step: 0.5 },
};
