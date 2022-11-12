import { Text, Tooltip } from '@chakra-ui/react';
import { FlexCardWrapper } from '../ui/CardWrapper';
import { useLoginInfo } from '../../hooks/auth/useLoginInfo';
import { shortenHash } from '../../utils/shortenHash';

export const GetLoginInfoDemo = () => {
  const { loginMethod, expires, loginToken, signature } = useLoginInfo();

 
};
