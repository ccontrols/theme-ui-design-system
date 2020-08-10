/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Image',
  component: Image,
};

export const overview = ({ src }) => <Image src={src} />;

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://s3.amazonaws.com/uifaces/faces/twitter/surgeonist/128.jpg',
  },
};
