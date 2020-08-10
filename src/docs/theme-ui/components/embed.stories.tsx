import React from 'react';
import { Embed } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Embed',
  component: Embed,
};

export const overview = ({ src }) => (
  <Embed src={src} />
);

overview.controls = {
  src: { type: ControlTypes.TEXT, value: 'https://www.youtube.com/embed/GNCd_ERZvZM', data: false }
}