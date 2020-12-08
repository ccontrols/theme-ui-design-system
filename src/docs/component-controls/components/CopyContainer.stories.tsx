import React from 'react';
import { Document, Example } from '@component-controls/core';
import { CopyContainer } from '@component-controls/components';

export default {
  title: 'component-controls/CopyContainer',
  component: CopyContainer,
} as Document;

export const overview: Example = () => (
  <CopyContainer value="some text">
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <p>some text.</p>
      <p>click to copy</p>
    </div>
  </CopyContainer>
);
