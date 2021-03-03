import React from 'react';
import { Document, Example } from '@component-controls/core';
import { InfoTip, InfoTipProps } from '@component-controls/components';

export default {
  title: 'Components/InfoTip',
  component: InfoTip,
  category: 'Display',
} as Document;

export const overview: Example<InfoTipProps> = ({ children, size }) => (
    <InfoTip size={size}>{children}</InfoTip>
);

overview.controls = {
  children: `
  # Header H1
  ## Header H2
  ### Header H3
  #### Header H4
  ##### Header H5
  
  some text  
  `,
  size: 18,
};
