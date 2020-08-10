/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Input',
  component: Input,
};

export const overview = ({ defaultValue }) => (
  <Input defaultValue={defaultValue} />
);

overview.controls = {
  defaultValue: { type: ControlTypes.TEXT, value: 'Katlyn Oberbrunner' },
};
