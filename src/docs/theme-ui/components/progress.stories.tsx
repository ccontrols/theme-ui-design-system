/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Progress, ProgressProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Progress',
  component: Progress,
  description: 'Progress variants can be defined anywhere in the `theme` object.',
} as Document;

export const overview: Example<ProgressProps> = ({ value }) => <Progress value={value} max={100} />;

overview.controls = {
  value: { type: ControlTypes.NUMBER, value: 50, min: 0, max: 100 },
};
