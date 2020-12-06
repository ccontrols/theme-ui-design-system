/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Label, Input, Box, Checkbox, Select, Textarea, Flex, Radio, Slider, Button } from 'theme-ui';
import { Document, Example } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Form',
  description: `**Tip**: Each form field needs to include a \`<label>\` element with an \`htmlFor\` prop that matches its field. The entire form should be wrapped in a \`<form>\` element.

  Add styles for form elements in the \`theme.forms\` object.`
} as Document;

export const overview: Example = () => (
  <Box
    as='form'
    onSubmit={e => e.preventDefault()}>
    <Label htmlFor='username'>Username</Label>
    <Input
      name='username'
      id='username'
      sx={{ mb: 3 }}
      
    />
    <Label htmlFor='password'>Password</Label>
    <Input
      type='password'
      name='password'
      id='password'
      sx={{ mb: 3 }}
    />
    <Box>
      <Label sx={{ mb: 3 }}>
        <Checkbox />
        Remember me
      </Label>
    </Box>
    <Label htmlFor='sound'>Sound</Label>
    <Select name='sound' id='sound' sx={{ mb: 3 }}>
      <option>Beep</option>
      <option>Boop</option>
      <option>Blip</option>
    </Select>
    <Label htmlFor='comment'>Comment</Label>
    <Textarea
      name='comment'
      id='comment'
      rows={6}
      sx={{ mb: 3 }}
    />
    <Flex sx={{ mb: 3 }}>
      <Label>
        <Radio name='letter' /> Alpha
      </Label>
      <Label>
        <Radio name='letter' /> Bravo
      </Label>
      <Label>
        <Radio name='letter' /> Charlie
      </Label>
    </Flex>
    <Label>
      Slider
    </Label>
    <Slider sx={{ mb: 3 }} />
    <Button>
      Submit
    </Button>
  </Box>
);

