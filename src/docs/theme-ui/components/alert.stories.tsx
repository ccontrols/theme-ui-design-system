/** @jsx jsx */
import { jsx } from 'theme-ui';
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
      <Text sx={{
        //safari fix:
        WebkitTextFillColor: 'white',
      }}>some alert text</Text>
      <Close />
    </Flex>
  </Alert>
);
