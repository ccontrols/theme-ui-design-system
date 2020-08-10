/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Progress } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Progress',
  component: Progress,
  description: 'Progress variants can be defined anywhere in the `theme` object.',
};

export const overview = ({ value }) => <Progress value={value} max={100} />;

overview.controls = {
  value: { type: ControlTypes.NUMBER, value: 50, min: 0, max: 100 },
};
