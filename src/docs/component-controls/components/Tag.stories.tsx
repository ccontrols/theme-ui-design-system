import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Tag, TagProps } from '@component-controls/components';

export default {
  title: 'component-controls/Tag',
  component: Tag,
  category: 'Display',
} as Document;

export const overview: Example<TagProps> = ({ color }) => {
  return <Tag color={color}>some text</Tag>;
};

overview.controls = {
  color: { type: ControlTypes.COLOR, value: 'primary' },
};
