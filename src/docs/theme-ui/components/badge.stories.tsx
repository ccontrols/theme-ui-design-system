/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Badge } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Badge',
  component: Badge,
  description:
    'Badge variants can be defined in `theme.badges`. The Badge component uses `theme.badges.primary` as its default variant.',
};

export const overview = ({ ml, mt }) => <Badge sx={{ ml, mt }}>badge</Badge>;

overview.controls = {
  ml: { type: ControlTypes.NUMBER, value: -3, step: 1 },
  mt: { type: ControlTypes.NUMBER, value: -3, step: 1 },
};
