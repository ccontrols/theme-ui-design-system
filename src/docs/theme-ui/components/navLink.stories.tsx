/** @jsx jsx */
import { jsx, ThemeUICSSProperties } from 'theme-ui';
import { Flex, NavLink } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/NavLink',
  component: NavLink,
} as Document;

export const overview: Example<ThemeUICSSProperties> = ({ p }) => (
  <Flex>
    <NavLink href='#!' sx={{ p }}>
      Home
    </NavLink>
    <NavLink href='#!' sx={{ p }}>
      Blog
    </NavLink>
    <NavLink href='#!' sx={{ p }}>
      About
    </NavLink>
  </Flex>
);

overview.controls = {
  p: { type: ControlTypes.NUMBER, value: 2 },
};
