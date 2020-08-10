import React from 'react';
import { MenuButton } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/MenuButton',
  component: MenuButton,
};

export const overview = ({ variant }) => (
  <MenuButton variant={variant} />
);

overview.controls = {
  variant: {
    type: ControlTypes.OPTIONS,
    options: ['primary', 'secondary'],
    value: 'primary',
  },
};
