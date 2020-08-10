/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, NavLink } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/NavLink',
  component: NavLink,
};

export const overview = ({ p }) => (
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
