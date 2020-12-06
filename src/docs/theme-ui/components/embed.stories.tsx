import React from 'react';
import { Embed, EmbedProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Embed',
  component: Embed,
} as Document;

export const overview: Example<EmbedProps> = ({ src }) => (
  <Embed src={src} />
);

overview.controls = {
  src: { type: ControlTypes.TEXT, value: 'https://www.youtube.com/embed/GNCd_ERZvZM', data: false }
}