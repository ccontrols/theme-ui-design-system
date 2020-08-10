/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Donut } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Donut',
  component: Donut,
  description: 'Donut variants can be defined anywhere in the `theme` object.'
};

export const overview = props => <Donut {...props} />;

overview.controls = {
  value: { type: ControlTypes.NUMBER, value: 0.5 },
  min: { type: ControlTypes.NUMBER, value: 0 },
  max: { type: ControlTypes.NUMBER, value: 1 },
  title: { type: ControlTypes.TEXT, value: 'donut' },
  size: { type: ControlTypes.NUMBER, value: 128 },
  strokeWidth: { type: ControlTypes.NUMBER, value: 2 },
};

overview.smartControls = false;