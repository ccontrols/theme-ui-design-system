import React from 'react';
import { Select } from 'theme-ui';
import { Document, Example } from '@component-controls/core';

export default {
  title: 'theme-ui/Select',
  component: Select,
} as Document;

export const overview: Example = () => (
  <Select
    defaultValue='Hello'>
    <option>Hello</option>
    <option>Hi</option>
    <option>Beep</option>
    <option>Boop</option>
  </Select>
);
