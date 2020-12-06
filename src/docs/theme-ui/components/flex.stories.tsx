/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Box, ThemeUICSSProperties } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Flex',
  component: Flex,
  description:
    'The Flex component is identical to the Box component, but with display: flex set. If you need to alter the display property, use the Box component instead.',
} as Document;

export const overview: Example<ThemeUICSSProperties> = ({ flexDirection, p }) => (
  <Flex sx={{ flexDirection, p }}>
    <Box sx={{ flex: '1 1 auto', bg: 'background', m: 1 }}>
      Box 1
    </Box>
    <Box sx={{ m: 1, bg: 'muted' }}>
      Box 2
    </Box>
    <Box sx={{ m: 1, bg: 'secondary' }}>
      Box 3
    </Box>
  </Flex>
);

overview.controls = {
  flexDirection: { type: ControlTypes.OPTIONS, options: [ "column", "column-reverse", "row", "row-reverse"] },
  p: { type: ControlTypes.NUMBER, value: 0 },
};
