/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Alert, Close, Flex, Text } from 'theme-ui';
import { Document, Example } from '@component-controls/core';

export default {
  title: 'theme-ui/Alert',
  component: Alert,
} as Document;

export const overview: Example = () => (
  <Alert variant="primary">
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Text sx={{
        //safari fix:
        WebkitTextFillColor: 'white',
      }}>some alert text</Text>
      <Close />
    </Flex>
  </Alert>
);
