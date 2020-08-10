import React from 'react';
import { Tag, TagProps } from '@component-controls/components';

export default {
  title: 'Components/component-controls/Tag',
  component: Tag,
};

export const overview = ({ color }: TagProps) => {
  return <Tag color={color}>some text</Tag>;
};

overview.story = {
  controls: {
    color: { type: 'color', value: 'red' },
  },
};
