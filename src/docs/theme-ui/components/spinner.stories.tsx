/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Spinner, SpinnerProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Spinner',
  component: Spinner,
  description: `A \`title\` attribute should be provided to the component for accessibility purposes.
  The element uses \`role='img'\` by default.
  Pass any overrides or additional attributes for the SVG element as props.
  
  Spinner variants can be defined anywhere in the \`theme\` object.
  `
} as Document;

export const overview: Example<SpinnerProps> = ({ size, strokeWidth }) => <Spinner size={size} strokeWidth={strokeWidth} />;

overview.controls = {
  size: { type: ControlTypes.NUMBER, value: 48 },
  strokeWidth: { type: ControlTypes.NUMBER, value: 4 },
};
