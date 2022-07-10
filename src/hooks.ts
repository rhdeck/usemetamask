import { useEffect, useState, useCallback, useMemo } from "react";
import {
  onChainChanged,
  onConnect,
  onDisconnect,
  onAccountsChanged,
  onMessage,
  ProviderMessage,
  eth_chainId,
  eth_accounts,
} from "@raydeck/metamask-ts";
export const useConnected = () => {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    const remove = onConnect(() => {
      console.log("Saw connect event");
      setConnected(true);
    });
    const remove2 = onDisconnect(() => {
      console.log("Saw disconnect event");
      setConnected(false);
    });
    return () => {
      remove();
      remove2();
    };
  }, []);
  return connected;
};
export const useChainId = () => {
  const [chainId, setChainId] = useState("0x" + new Number(0).toString(16));
  useEffect(() => {
    (async () => {
      const _chainId = await eth_chainId();
      setChainId(_chainId);
    })();
  }, []);
  useEffect(() => {
    const remove = onChainChanged((chainId) => setChainId(chainId));
    return () => remove();
  }, []);
  return chainId;
};
export const useAccounts = () => {
  const [accounts, setAccounts] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      setAccounts(await eth_accounts());
    })();
  }, []);
  useEffect(() => {
    const remove = onAccountsChanged((accounts) => {
      console.log("I have new accounts", accounts);
      setAccounts(accounts);
    });
    return () => remove();
  }, []);
  return accounts;
};
export const useAccount = () => {
  const accounts = useAccounts();
  return useMemo(() => (accounts.length ? accounts[0] : ""), [accounts]);
};

export const useMessage = () => {
  const [message, setMessage] = useState<ProviderMessage>({
    data: null,
    type: "",
  });
  useEffect(() => {
    const remove = onMessage((message) => setMessage(message));
    return () => remove();
  }, []);
  return message;
};
