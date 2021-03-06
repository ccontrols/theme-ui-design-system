import React from 'react';
import { MenuButton, MenuButtonProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/MenuButton',
  component: MenuButton,
  category: 'Input',
} as Document;

export const overview: Example<MenuButtonProps> = ({ variant }) => (
  <MenuButton variant={variant} />
);

overview.controls = {
  variant: {
    type: ControlTypes.OPTIONS,
    options: ['primary', 'secondary'],
    value: 'primary',
  },
};
