import React from 'react';
import { Text } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Text',
  component: Text,
  description: 'The Text component uses `theme.text.default` as its default variant style.'
};

export const overview = ({ fontWeight, fontSize }) => (
  <Text
    sx={{
      fontSize,
      fontWeight,
    }}>
    Hello
  </Text>
);

overview.controls = {
  fontWeight: {
    type: ControlTypes.OPTIONS,
    options: ['bold', 'normal', 'bolder', 'lighter'],
    value: 'normal',
  },
  fontSize: {
    type: ControlTypes.NUMBER,
    value: 4,
    min: 0,
    max: 5,
    step: 1,
  },

};