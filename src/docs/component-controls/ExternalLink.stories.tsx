import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { ExternalLink, ExternalLinkProps } from '@component-controls/components';

export default {
  title: 'component-controls/ExternalLink',
  component: ExternalLink,
} as Document;

export const overview: Example<ExternalLinkProps> = ({ href }) => {
  return <ExternalLink href={href}>{href}</ExternalLink>;
};

overview.smartControls = {
  smart: false,
};
overview.controls = {
  href: {
    type: ControlTypes.TEXT,
    value: 'https://www.google.com',
    data: { name: 'internet.url' },
  },
};
