import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Value, ValueProps } from '@component-controls/components';

export default {
  title: 'component-controls/Value',
  component: Value,
  category: 'Display',
} as Document;

export const overview: Example<ValueProps> = ({ label, value }) => {
  return <Value label={label} value={value} />;
};

overview.controls = {
  label: 'date created',
  value: '01/01/2020',
};
