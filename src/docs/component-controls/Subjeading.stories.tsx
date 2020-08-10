import React from 'react';
import { Subheading, SubheadingProps } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Subheading',
  component: Subheading,
};

export const overview = ({ children }: SubheadingProps) => {
  return <Subheading>{children}</Subheading>;
};

overview.story = {
  controls: {
    children: { type: 'text', value: 'Subheading text' },
  },
};
