/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Container',
  component: Container,
};

export const overview = ({ bg, p }) => (
  <Container sx={{ bg, p }}>Container text</Container>
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
  bg: { type: ControlTypes.OPTIONS, value: 'muted', options: colors },
};
