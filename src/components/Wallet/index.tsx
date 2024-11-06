"use client";
import { useTonWallet } from "@tonconnect/ui-react";
import React from "react";

type Props = {};

export const Wallet = (props: Props) => {
  const wallet = useTonWallet();
  console.log(wallet);

  return <div>Wallet</div>;
};
