/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Slider } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Slider',
  component: Slider,
};

export const overview = ({ defaultValue }) => <Slider defaultValue={defaultValue} />;

overview.controls = {
  defaultValue: { type: ControlTypes.NUMBER, value: 25, min: 0, max: 100 },
};
