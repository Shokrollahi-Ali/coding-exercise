import React, { createContext } from 'react';

export interface IMessage {
  setServiceMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default createContext<IMessage>({
  setServiceMessage: () => undefined,
});
