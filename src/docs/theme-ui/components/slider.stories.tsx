/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Slider, SliderProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Slider',
  component: Slider,
} as Document;

export const overview: Example<SliderProps> = ({ defaultValue }) => <Slider defaultValue={defaultValue} />;

overview.controls = {
  defaultValue: { type: ControlTypes.NUMBER, value: 25, min: 0, max: 100 },
};
