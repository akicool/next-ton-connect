"use client";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import React from "react";

type Props = {};

export const Header = (props: Props) => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const balance = 0;
  return (
    <header className="flex items-center justify-between w-full py-3 gap-4">
      <div>
        <p>Balance: {balance} TON</p>
      </div>
      {/* <button onClick={() => tonConnectUI.openModal()}>Connect Wallet</button> */}
      <button onClick={() => tonConnectUI.openSingleWalletModal('tonkeeper')}>Connect Wallet</button>
    </header>
  );
};
