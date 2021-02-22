/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image, ImageProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Image',
  component: Image,
  category: 'Media',
} as Document;

export const overview: Example<ImageProps> = ({ src }) => <Image src={src} />;

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/200/300',
  },
};
