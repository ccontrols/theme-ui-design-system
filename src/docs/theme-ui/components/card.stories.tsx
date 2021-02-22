/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, Image, Text } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Card',
  component: Card,
  description:
    'Card style variants can be defined in the theme.cards object. By default the Card component uses the theme.cards.primary variant.',
  category: 'Containers',
} as Document;

export const overview: Example<{ maxWidth: number, src: string, text: string }> = ({ maxWidth, src, text }) => (
  <Card sx={{ maxWidth, bg: 'background' }}>
    <Image src={src} />
    <Text>{text}</Text>
  </Card>
);

overview.controls = {
  maxWidth: { type: ControlTypes.NUMBER, value: 252 },
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/id/1084/128/128',
  },
  text: { type: ControlTypes.TEXT, value: 'Card' },
};
