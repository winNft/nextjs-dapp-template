import { Container, Box, Text, Stack } from '@chakra-ui/react';
import packageJson from '../../package.json';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="dappTemplate.dark.darker"
      color="dappTemplate.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>winNft (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          Created with ❤️ by winNft
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          fontSize="xs"
          fontWeight="bold"
        >
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://t.me/winNftOfficial"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {"Telegram"}
          </Text>
          <Text ml={2} mr={2}>
            {' '}
            |{' '}
          </Text>
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://discord.gg/bK6mwDSgxc"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Discord'}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
