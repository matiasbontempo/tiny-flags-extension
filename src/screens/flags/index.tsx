import { useEffect, useState } from 'react';

import missingFlagsImg from '@assets/ant-tiny-flags.png';

import ListItem from '@components/list-item';

import {
  Container, StyledEmptyFlags, StyledImage, StyledText,
} from './styles';
import { addMessageListener, removeMessageListener, sendExtensionMessage } from './helpers';

import { ExtensionMessage, Flags } from './types';

const FlagsScreen = () => {
  const [flags, setFlags] = useState<Flags | null>(null);

  useEffect(() => {
    const handleMessage = (request: ExtensionMessage<Flags>) => {
      if (request.type !== 'GOT_FLAGS' || !request.payload) return;
      setFlags(request.payload);
    };

    sendExtensionMessage<ExtensionMessage>({ type: 'GET_FLAGS' });
    addMessageListener<ExtensionMessage<Flags>>(handleMessage);

    return () => removeMessageListener(handleMessage);
  }, []);

  const handleFlagToggle = (value: boolean, key: string) => {
    if (!flags) return;

    sendExtensionMessage({ type: 'SET_FLAG', payload: { key, value } });

    const updatedFlag = { ...flags[key], value };
    setFlags({
      ...flags,
      [key]: updatedFlag,
    });
  };

  const renderListItems = () => {
    if (!flags) return null;

    const flagKeys = Object.keys(flags);

    return flagKeys.map((key) => (
      <ListItem
        id={key}
        key={key}
        label={flags[key].label}
        value={flags[key].value}
        onClick={handleFlagToggle}
      />
    ));
  };

  const renderEmptyState = () => (
    <StyledEmptyFlags>
      <StyledImage src={missingFlagsImg} alt="" />
      <StyledText>
        No flags detected
      </StyledText>
    </StyledEmptyFlags>
  );

  return (
    <Container>
      {flags ? renderListItems() : renderEmptyState()}
    </Container>
  );
};

export default FlagsScreen;
