import React from 'react';
import { Field, FieldProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Field',
  component: Field,
  description:
    'The `Field` component uses the same variants as the other [form components](/forms) that it is composed of.',
    category: 'Input',  
} as Document;

export const overview: Example<FieldProps<'input'>> = ({ label, name, defaultValue }) => (
  <Field label={label} name={name} defaultValue={defaultValue} />
);

overview.controls = {
  label: { type: ControlTypes.TEXT, value: 'Email', data: false },
  name: { type: ControlTypes.TEXT, value: 'email', data: false },
  defaultValue: { type: ControlTypes.TEXT, value: 'Katlynn_Oberbrunner99@gmail.com', data: { name: 'internet.email' } },
};
