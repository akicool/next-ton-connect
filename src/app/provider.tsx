"use client";
import { TonConnectUIProvider, useTonWallet } from "@tonconnect/ui-react";
import React from "react";
import ManifestURL from "../../public/tonconnect-manifest.json";

type Props = {};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  console.log(ManifestURL);

  return (
    // <TonConnectUIProvider manifestUrl="https://github.com/ton-community/tutorials/blob/main/03-client/test/public/tonconnect-manifest.json">
    <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
};
