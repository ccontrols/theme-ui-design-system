import React from 'react';
import { Title, TitleProps } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Title',
  component: Title,
};

export const overview = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

overview.story = {
  controls: {
    children: { type: 'text', value: 'Title text' },
  },
};
