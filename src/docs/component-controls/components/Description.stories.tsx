import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Description } from '@component-controls/components';

export default {
  title: 'component-controls/Description',
  component: Description,
  category: 'Typography',
} as Document;

export const overview: Example = () => (
  <Description>Some **description** markdown</Description>
);
