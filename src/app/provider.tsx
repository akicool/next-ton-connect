"use client";
import { TonConnectUIProvider, useTonWallet } from "@tonconnect/ui-react";
import React from "react";
import ManifestURL from "../../public/tonconnect-manifest.json";

type Props = {};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  console.log(ManifestURL);

  return (
    // <TonConnectUIProvider manifestUrl="https://github.com/ton-community/tutorials/blob/main/03-client/test/public/tonconnect-manifest.json">
    <TonConnectUIProvider manifestUrl="https://github.com/akicool/next-ton-connect/blob/main/public/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
};
