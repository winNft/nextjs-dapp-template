import type { NextPage } from 'next';
import {
  ListItem,
  Text,
  OrderedList,
  UnorderedList,
  Flex,
  Link,
} from '@chakra-ui/react';
import { MainLayout } from '../components/ui/MainLayout';
import { HeaderMenu } from '../components/ui/HeaderMenu';
import { HeaderMenuButtons } from '../components/ui/HeaderMenuButtons';
import { SimpleDemo } from '../components/demo/SimpleDemo';
import { GetUserDataDemo } from '../components/demo/GetUserDataDemo';
import { GetLoggingInStateDemo } from '../components/demo/GetLoggingInStateDemo';
import { GetLoginInfoDemo } from '../components/demo/GetLoginInfoDemo';
import { Authenticated } from '../components/tools/Authenticated';
import { CardWrapper } from '../components/ui/CardWrapper';
import { LoginModalButton } from '../components/tools/LoginModalButton';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      
      <Authenticated
       
      >
        <SimpleDemo />
        
        <Flex gap={8} flexWrap="wrap" justifyContent="center" mb={4}>
          <GetUserDataDemo/>
          <GetLoginInfoDemo/>
          <GetLoggingInStateDemo/>
        </Flex>
        
        <CardWrapper>
          
          <Text>
            Head over to our News&Updates page to see what's coming!{' '}
            <Link
              href="https://www.mintandwin.com/newsandupdates"
              textDecoration="underline"
            >
              News
            </Link>
          </Text>
        </CardWrapper>
      </Authenticated>
    </MainLayout>
  );
};

export default Home;
