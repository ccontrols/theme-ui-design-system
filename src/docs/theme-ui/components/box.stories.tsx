/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, ThemeUICSSObject } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Box',
  component: Box,
  description:
    'Use the `Box` component as a layout primitive to add margin, padding, and colors to content.',
} as Document;

export const overview: Example<ThemeUICSSObject> = ({ color, bg, p }) => (
  <Box sx={{ color, background: bg, p }}>some text</Box>
);

const colors = [
  'text',
  'background',
  'primary',
  'secondary',
  'highlight',
  'muted',
  'gray',
];
overview.controls = {
  p: { type: ControlTypes.NUMBER, value: 4 },
  color: { type: ControlTypes.OPTIONS, value: 'text', options: colors },
  bg: { type: ControlTypes.OPTIONS, value: 'background', options: colors },
};
