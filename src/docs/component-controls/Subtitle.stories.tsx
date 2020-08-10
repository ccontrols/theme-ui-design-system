import React from 'react';
import { Subtitle, SubtitleProps } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Subtitle',
  component: Subtitle,
};

export const overview = ({ children }: SubtitleProps) => {
  return <Subtitle>{children}</Subtitle>;
};

overview.story = {
  subtitle: 'This is subtitle',
  controls: {
    children: { type: 'text', value: 'Subtitle text' },
  },
};
