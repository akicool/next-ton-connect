"use client";
import { TonConnect, useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export const Wallet = (props: Props) => {
  const wallet = useTonWallet();
  const address = useTonAddress();

  return (
    <div>
      <h1 className=" text-3xl mb-10">Wallet Page</h1>
      {address && <p>Your address: {address}</p>}

      <Link
        href={{ pathname: "/transactions", query: { page: "transactions" } }}
        className="underline"
      >
        Transactions
      </Link>
    </div>
  );
};
