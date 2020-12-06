import React from 'react';
import { ImageProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { TitledImage } from '@component-controls/components';

export default {
  title: 'Components/component-controls/TitledImage',
  component: TitledImage,
} as Document;

export const overview: Example<ImageProps> = ({ title }) => {
  return (
    <TitledImage
      title={title}
      alt="alt text"
      src="https://github.com/ccontrols/component-controls/raw/master/misc/storybook-custom-docs/images/simple-page.jpg"
    />
  );
};

overview.controls = {
  title: { type: ControlTypes.TEXT, value: 'some image title' },
};
