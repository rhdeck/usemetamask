import { isEthereum } from "@raydeck/metamask-ts";
import { FC, createContext, useMemo, ReactNode, Fragment } from "react";
import { useConnected, useChainId, useAccounts } from "./hooks";
const context = createContext({});
const { Provider } = context;
/**
 * Provider for Connected or Disconnected state
 * @name MetamaskProvider
 * @description Provider for the `useConnected` hook
 * @param {ReactNode} children
 * @returns {ReactNode}
 * @category Components
 * @export
 */
export const MetamaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const connected = useConnected();
  const thisChainId = useChainId();
  const value = useMemo(
    () => ({ chainId: thisChainId, connected }),
    [thisChainId, connected]
  );
  return <Provider value={value}>{connected && <>{children}</>}</Provider>;
};
/**
 * Container for components to render when we are connected to a valid chain
 * @name MetamaskConnected
 * @description Renders if the connected state is true and we are on a valid chain
 * @returns {ReactNode}
 * @category Components
 * @export
 */
export const MetamaskConnected: FC<{
  chainIds?: string[];
  children: ReactNode;
  unconnected?: ReactNode;
}> = ({ chainIds, children, unconnected }) => {
  // const connected = useConnected();
  const thisChainId = useChainId();
  const accounts = useAccounts();
  if (
    accounts &&
    accounts.length &&
    (!chainIds || chainIds.includes(thisChainId))
  ) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{unconnected}</Fragment> || null;
  }
};
/**
 * @name MetamaskWrongChain
 * @description Renders if the connected state is true and we are not on a valid chain
 * @returns {ReactNode}
 * @category Components
 * @export
 */
export const MetamaskWrongChain: FC<{
  chainIds?: string[];
  children: ReactNode;
  unconnected?: ReactNode;
}> = ({ chainIds, children, unconnected }) => {
  // const connected = useConnected();
  const thisChainId = useChainId();
  const accounts = useAccounts();
  if (
    accounts &&
    accounts.length &&
    chainIds &&
    !chainIds.includes(thisChainId)
  ) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{unconnected}</Fragment> || null;
  }
};
/**
 * @name MetamaskUnconnected
 * @description Renders if the connected state is false
 * @returns {ReactNode}
 * @category Components
 * @export
 */
export const MetamaskDisconnected: FC<{
  chainId?: string;
  children: ReactNode;
  connected?: ReactNode;
}> = ({ chainId, children, connected }) => {
  // const _connected = useConnected();
  const thisChainId = useChainId();
  const accounts = useAccounts();
  console.log("Disconnected inputss", { accounts, thisChainId });
  if (
    !accounts ||
    !accounts.length ||
    thisChainId === "0x0" ||
    (chainId && thisChainId !== chainId)
  ) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{connected}</Fragment> || null;
  }
};
/**
 * @name MetamaskNotInstalled
 * @description Renders if there is no ethereum member of window
 * @returns {ReactNode}
 * @category Components
 * @export
 */
export const MetamaskNotInstalled: FC<{ children: ReactNode }> = ({
  children,
}) => {
  if (isEthereum) {
    return null;
  } else {
    return <Fragment>{children}</Fragment>;
  }
};
