import React, { useState } from 'react';
import { Switch, SwitchProps } from 'theme-ui';
import { Document, Example } from '@component-controls/core';

export default {
  title: 'theme-ui/Switch',
  component: Switch,
} as Document;

export const overview: Example<SwitchProps> = ({ label, checked: propChecked }) => {
  const [checked, setChecked] = useState(propChecked)
  return <Switch label={label} checked={checked} onChange={() => setChecked(!checked)} />
}

overview.controls = {
  label: 'Enable email alerts?',
  checked: true,
};
