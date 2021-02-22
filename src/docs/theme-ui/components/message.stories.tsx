import React from 'react';
import { Message } from 'theme-ui';
import { Document, Example } from '@component-controls/core';

export default {
  title: 'theme-ui/Message',
  component: Message,
  category: 'Display',
} as Document; 

export const overview: Example = () => <Message>This is just a message for someone to read</Message>;
