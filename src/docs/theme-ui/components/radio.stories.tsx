import React from 'react';
import { Radio, Label } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Radio',
  component: Radio,
};

export const overview = ({ checked }) => (
  <>
    <Label>
      <Radio
        name='dark-mode'
        value={checked ? 'true' : 'false'}
        defaultChecked={checked}
      />
      Dark Mode
    </Label>
    <Label>
      <Radio
        name='dark-mode'
        value={checked ? 'false' : 'true'}
        defaultChecked={!checked}
      />
      Light Mode
    </Label>
  </>  
);

overview.controls = {
  checked: { type: ControlTypes.BOOLEAN, value: true },
};
