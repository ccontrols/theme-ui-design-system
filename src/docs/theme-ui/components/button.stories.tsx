import React from 'react';
import { Button } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Button',
  component: Button,
  description:
    'Button variants can be defined in the theme.buttons object. The Button component uses theme.buttons.primary as its default variant style.',
};

export const overview = ({ variant }) => (
  <Button variant={variant}>click me</Button>
);

overview.controls = {
  variant: {
    type: ControlTypes.OPTIONS,
    options: ['primary', 'secondary'],
    value: 'primary',
  },
};
