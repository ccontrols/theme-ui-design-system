import React from 'react';
import { Checkbox, CheckboxProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Checkbox',
  component: Checkbox,
  description:
    'Checkbox variants can be defined in `theme.forms` and the component uses the `theme.forms.checkbox` variant by default.',
} as Document;

export const overview: Example<CheckboxProps> = ({ checked }) => <Checkbox defaultChecked={checked} />;

overview.controls = {
  checked: { type: ControlTypes.BOOLEAN, value: true },
};
