/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Badge, Box, ThemeUICSSObject } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Badge',
  component: Badge,
  description:
    'Badge variants can be defined in `theme.badges`. The Badge component uses `theme.badges.primary` as its default variant.',
  category: 'Display'    
} as Document;

export const overview: Example<ThemeUICSSObject> = ({ ml, mt }) => (
  <Box
    style={{
      height: '100%',
    }}
  >
    <Badge sx={{ ml, mt }}>badge</Badge>
  </Box>
);

overview.controls = {
  ml: { type: ControlTypes.NUMBER, value: -3, step: 1 },
  mt: { type: ControlTypes.NUMBER, value: -3, step: 1 },
};
