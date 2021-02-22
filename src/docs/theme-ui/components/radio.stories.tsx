import React from 'react';
import { Radio, RadioProps, Label } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Radio',
  component: Radio,
  category: 'Input',
} as Document;

export const overview: Example<RadioProps> = ({ checked }) => (
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
