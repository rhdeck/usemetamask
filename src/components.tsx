import { isEthereum } from "@raydeck/metamask-ts";
import { FC, createContext, useMemo, ReactNode, Fragment } from "react";
import { useConnected, useChainId } from "./hooks";
const context = createContext({});
const { Provider } = context;

export const MetamaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const connected = useConnected();
  const thisChainId = useChainId();
  const value = useMemo(
    () => ({ chainId: thisChainId, connected }),
    [thisChainId, connected]
  );
  return <Provider value={value}>{connected && <>{children}</>}</Provider>;
};

export const MetamaskConnected: FC<{
  chainId?: string;
  children: ReactNode;
  unconnected?: ReactNode;
}> = ({ chainId, children, unconnected }) => {
  const connected = useConnected();
  const thisChainId = useChainId();
  if (connected && (!chainId || thisChainId === chainId)) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{unconnected}</Fragment> || null;
  }
};
export const MetamaskDisconnected: FC<{
  chainId?: string;
  children: ReactNode;
  connected?: ReactNode;
}> = ({ chainId, children, connected }) => {
  const _connected = useConnected();
  const thisChainId = useChainId();
  if (!_connected || (chainId && thisChainId !== chainId)) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{connected}</Fragment> || null;
  }
};
export const MetamaskNotInstalled: FC<{ children: ReactNode }> = ({
  children,
}) => {
  if (isEthereum) {
    return null;
  } else {
    return <Fragment>{children}</Fragment>;
  }
};
