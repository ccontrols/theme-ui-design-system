import React from 'react';
import { Heading } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Heading',
  component: Heading,
};

export const overview = ({ as }) => (
  <Heading as={as}>heading text</Heading>
);

overview.controls = {
  as: {
    type: ControlTypes.OPTIONS,
    options: ['h1', 'h2', 'h3', 'h4', 'h5' ],
    value: 'h1',
  },
};
