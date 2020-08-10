import React from 'react';
import { Textarea } from 'theme-ui';
import { ControlTypes } from '@component-controls/core';

export default {
  title: 'Components/theme-ui/Textarea',
  component: Textarea,
};

export const overview = ({ rows }) => (
  <Textarea rows={rows} defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Fusce in metus velit.
In purus neque, mattis non vehicula a, facilisis a leo.
Mauris varius turpis quis tortor cursus convallis.
Duis sapien dui, consequat sed vestibulum et, posuere sed mauris.
Duis pretium eu velit ac fermentum.
Vestibulum et lacus eu erat interdum lobortis.
Proin placerat leo orci, ut placerat magna egestas sit amet.
Sed vitae orci aliquam, elementum leo vestibulum, mollis arcu.
Pellentesque dignissim mattis leo id eleifend.
Nullam egestas purus vitae nisl vestibulum scelerisque.
Donec porttitor velit eu sollicitudin scelerisque.
Suspendisse quis aliquet lacus, nec lacinia tellus.`} 
/>
);

overview.controls = {
  rows: {
    type: ControlTypes.NUMBER,
    value: 4,
    min: 0,
    max: 10,
    step: 1,
  },

};