import React from 'react';
import { Donut } from 'theme-ui';
import { Document, Example } from '@component-controls/core';
import { HoverBox } from '@component-controls/components';

export default {
  title: 'component-controls/HoverBox',
  component: HoverBox,
} as Document;

export const overview: Example = () => (
  <HoverBox label="donut component">
    <Donut value={1 / 2} />,
  </HoverBox>
);
