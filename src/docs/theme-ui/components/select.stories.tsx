import React from 'react';
import { Select } from 'theme-ui';

export default {
  title: 'Components/theme-ui/Select',
  component: Select,
};

export const overview = () => (
  <Select
    defaultValue='Hello'>
    <option>Hello</option>
    <option>Hi</option>
    <option>Beep</option>
    <option>Boop</option>
  </Select>
);
