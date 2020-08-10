import React from 'react';
import { ImageProps } from 'theme-ui';
import { TitledImage } from '@component-controls/components';

export default {
  title: 'Components/component-controls/TitledImage',
  component: TitledImage,
};

export const overview = ({ title }: ImageProps) => {
  return (
    <TitledImage
      title={title}
      alt="alt text"
      src="https://github.com/ccontrols/component-controls/raw/master/misc/storybook-custom-docs/images/simple-page.jpg"
    />
  );
};

overview.story = {
  controls: {
    title: { type: 'text', value: 'some image title' },
  },
};
