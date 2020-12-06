import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Title, TitleProps } from '@component-controls/components';

export default {
  title: 'component-controls/Title',
  component: Title,
} as Document;

export const overview: Example<TitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

overview.controls = {
  children: { type: ControlTypes.TEXT, value: 'Title text' },
};
