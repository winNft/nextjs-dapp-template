import { Link, Text } from '@chakra-ui/react';
import { TransactionPayload } from '@elrondnetwork/erdjs';
import { useTransaction } from '../../hooks/core/useTransaction';
import { useCallback } from 'react';
import { ActionButton } from '../tools/ActionButton';
import { networkConfig, chainType } from '../../config/network';
import { shortenHash } from '../../utils/shortenHash';
import { FlexCardWrapper } from '../ui/CardWrapper';
import { TransactionCb } from '../../hooks/core/common-helpers/sendTxOperations';

const egldTransferAddress = process.env.NEXT_PUBLIC_EGLD_TRANSFER_ADDRESS || '';
const egldTransferAmount = process.env.NEXT_PUBLIC_EGLD_TRANSFER_AMOUNT || '';

export const SimpleEGLDTxDemo = ({
  cb,
}: {
  cb: (params: TransactionCb) => void;
}) => {
  const { pending, triggerTx } = useTransaction({ cb });

  const handleSendTx = useCallback(() => {
    const demoMessage = 'Transaction demo!';
    triggerTx({
      address: egldTransferAddress,
      gasLimit: 50000 + 1500 * demoMessage.length,
      data: new TransactionPayload(demoMessage),
      value: Number(egldTransferAmount),
    });
  }, [triggerTx]);


};
