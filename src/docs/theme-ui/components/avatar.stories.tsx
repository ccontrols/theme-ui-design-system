/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Avatar, AvatarProps } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Avatar',
  component: Avatar,
  description:
    'Avatar style variants can be defined in the `theme.images` object and uses `theme.images.avatar` by default.',
};

export const overview = ({ src, size }: AvatarProps) => (
  <Avatar src={src} size={size} />
);

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://s3.amazonaws.com/uifaces/faces/twitter/tumski/128.jpg',
  },
  size: { type: ControlTypes.NUMBER, value: 120, step: 10 },
};
