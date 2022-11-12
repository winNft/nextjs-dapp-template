import { Text } from '@chakra-ui/react';
import { FlexCardWrapper } from '../ui/CardWrapper';
import { useLoggingIn } from '../../hooks/auth/useLoggingIn';

export const GetLoggingInStateDemo = () => {
  const { isLoggingIn, error, isLoggedIn } = useLoggingIn();


};
