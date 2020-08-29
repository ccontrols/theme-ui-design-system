import React from 'react';
import { Donut } from 'theme-ui';
import { HoverBox } from '@component-controls/components';

export default {
  title: 'Components/component-controls/HoverBox',
  component: HoverBox,
};

export const overview = () => (
  <HoverBox label="donut component">
    <Donut value={1 / 2} />,
  </HoverBox>
);
