import { useEffect, useState, useCallback, useMemo } from "react";
import {
  onChainChanged,
  onConnect,
  onDisconnect,
  onAccountsChanged,
  onMessage,
  ProviderMessage,
} from "@raydeck/metamask-ts";

export const useConnected = () => {
  const [connected, setConnected] = useState(false);
  const removeOnConnect = useMemo(() => {
    return onConnect(() => setConnected(true));
  }, []);
  const removeOnDisconnect = useMemo(() => {
    return onDisconnect(() => setConnected(false));
  }, []);
  useEffect(() => {
    return () => {
      removeOnConnect();
      removeOnDisconnect();
    };
  }, [removeOnConnect, removeOnDisconnect]);
  return connected;
};
export const useChainId = () => {
  const [chainId, setChainId] = useState("0x" + new Number(0).toString(16));
  onChainChanged((chainId) => setChainId(chainId));
  return chainId;
};
export const useAccounts = () => {
  const [accounts, setAccounts] = useState<string[]>([]);
  onAccountsChanged((accounts) => setAccounts(accounts));
  return accounts;
};
export const useMessage = () => {
  const [message, setMessage] = useState<ProviderMessage>({
    data: null,
    type: "",
  });
  onMessage((message) => setMessage(message));
  return message;
};
