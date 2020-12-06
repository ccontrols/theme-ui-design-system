/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Avatar, AvatarProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Avatar',
  component: Avatar,
  description:
    'Avatar style variants can be defined in the `theme.images` object and uses `theme.images.avatar` by default.',
} as Document;

export const overview: Example<AvatarProps> = ({ src, size }) => (
  <Avatar src={src} size={size} />
);

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/id/1084/128/128',
  },
  size: { type: ControlTypes.NUMBER, value: 120, step: 10 },
};
