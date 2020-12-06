/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid, Box } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'theme-ui/Grid',
  component: Grid,
} as Document;

export const width: Example<{ width1: number, width3: number }> = ({ width1, width3 }) => (
  <Grid width={[ width1, null, width3 ]}>
    <Box sx={{ bg: 'primary', color: 'white' }}>Box</Box>
    <Box sx={{ bg: 'muted' }}>Box</Box>
    <Box sx={{ bg: 'primary', color: 'white' }}>Box</Box>
    <Box sx={{ bg: 'muted' }}>Box</Box>
  </Grid>
);


width.controls = {
  width1: { type: ControlTypes.NUMBER, value: 128, description: 'minimum width of first child element' },
  width3: { type: ControlTypes.NUMBER, value: 192 , description: 'minimum width of third child element'},
};


export const columns: Example<{ gap: number, col1: number, col3: number }> = ({ gap, col1, col3 }) => (
  <Grid gap={gap} columns={[ col1, null, col3 ]}>
    <Box sx={{ bg: 'primary', color: 'white' }}>Box</Box>
    <Box sx={{ bg: 'muted' }}>Box</Box>
    <Box sx={{ bg: 'primary', color: 'white' }}>Box</Box>
    <Box sx={{ bg: 'muted' }}>Box</Box>
  </Grid>
);


columns.controls = {
  gap: { type: ControlTypes.NUMBER, value: 2, description: 'space between child elements' },
  col1: { type: ControlTypes.NUMBER, value: 2, description: 'number of (equally-sized) columns in first position' },
  col3: { type: ControlTypes.NUMBER, value: 4, description: 'number of (equally-sized) columns in third position' },
};


export const fractions: Example<{ gap: number, col1: number, fr1: number, fr2: number }> = ({ gap, col1, fr1, fr2 }) => (
  <Grid gap={gap} columns={[col1, `${fr1}fr ${fr2 }fr`]}>
    <Box sx={{ bg: 'primary', color: 'white' }}>Box</Box>
    <Box sx={{ bg: 'muted' }}>Box</Box>
    <Box sx={{ bg: 'primary', color: 'white' }}>Box</Box>
    <Box sx={{ bg: 'muted' }}>Box</Box>
  </Grid>
);


fractions.controls = {
  gap: { type: ControlTypes.NUMBER, value: 2, description: 'space between child elements' },
  col1: { type: ControlTypes.NUMBER, value: 2, description: 'number of (equally-sized) columns in first position' },
  fr1: { type: ControlTypes.NUMBER, value: 1, description: 'fraction-sized child elements' },
  fr2: { type: ControlTypes.NUMBER, value: 2, description: 'fraction-sized child elements' },
};