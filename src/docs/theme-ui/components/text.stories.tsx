import React from 'react';
import { Text, ThemeUICSSProperties } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Text',
  component: Text,
  description: 'The Text component uses `theme.text.default` as its default variant style.'
} as Document;

export const overview: Example<ThemeUICSSProperties> = ({ fontWeight, fontSize }) => (
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