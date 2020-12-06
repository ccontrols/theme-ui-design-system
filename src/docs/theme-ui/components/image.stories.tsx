/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image, ImageProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Image',
  component: Image,
} as Document;

export const overview: Example<ImageProps> = ({ src }) => <Image src={src} />;

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/200/300',
  },
};
