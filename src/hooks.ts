import { useEffect, useState, useCallback, useMemo, useRef } from "react";
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
let currentChain = "0x" + new Number(0).toString(16);
/**
 * Returns whether the wallet is connected to this site.
 * @returns boolean.
 * @example
 * ```ts
 * import { useConnected } from "@raydeck/usemetamask";
 * const connected = useConnected();
 * ```
 * @category Hooks
 * @export
 */
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
/**
 *
 * @returns The current chain ID.
 * @example
 * ```ts
 * import { useChainId } from "@raydeck/usemetamask";
 * const chainId = useChainId();
 * ```
 * @category Hooks
 * @export
 *
 */
export const useChainId = () => {
  const [chainId, setChainId] = useState(currentChain);
  useEffect(() => {
    (async () => {
      const _chainId = await eth_chainId();
      setChainId(_chainId);
      currentChain = _chainId;
    })();
  }, []);
  useEffect(() => {
    const remove = onChainChanged((chainId) => {
      setChainId(chainId);
      currentChain = chainId;
    });
    return () => remove();
  }, []);
  return chainId;
};
/**
 * Returns the current accounts
 * @returns string[]
 * @example
 * ```ts
 * import { useAccounts } from "@raydeck/usemetamask";
 * const accounts = useAccounts();
 * ```
 * @category Hooks
 * @export
 */
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
/**
 * Returns the current account
 * @returns string
 * @example
 * ```ts
 * import { useAccount } from "@raydeck/usemetamask";
 * const account = useAccount();
 * ```
 * @category Hooks
 * @export
 */

export const useAccount = () => {
  const accounts = useAccounts();
  return useMemo(() => (accounts.length ? accounts[0] : ""), [accounts]);
};
/**
 * Returns the current message
 * @returns ProviderMessage
 * @example
 * ```ts
 * import { useMessage } from "@raydeck/usemetamask";
 * const message = useMessage();
 * ```
 * @category Hooks
 * @export
 */
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
/**
 * Trigger a window reload when the chain changes. (best practice)
 *  @category Hooks
 * @export
 * @example
 * ```ts
 * import { useChainChanged } from "@raydeck/usemetamask";
 * useChainChanged();
 * ```
 */
export const useReloadOnChainChange = () => {
  const chainIdRef = useRef("");
  const chainId = useChainId();
  useEffect(() => {
    if (chainId) {
      if (!chainIdRef.current || chainIdRef.current === "0x0") {
        chainIdRef.current = chainId;
      } else if (chainIdRef.current !== chainId) {
        window.location.reload();
      }
    }
  }, [chainId]);
};
