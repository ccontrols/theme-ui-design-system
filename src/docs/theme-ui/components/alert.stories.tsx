import React from 'react';
import { Alert, Close, Flex, Text } from 'theme-ui';

export default {
  title: 'Components/theme-ui/Alert',
  component: Alert,
};

export const overview = () => (
  <Alert variant="primary">
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Text>some alert text</Text>
      <Close />
    </Flex>
  </Alert>
);
