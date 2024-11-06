"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
import { IconArrowBackUp, IconReload } from "@tabler/icons-react";

const getBalance = async (address: string) => {
  const res = await fetch(
    `https://testnet.toncenter.com/api/v2/getAddressInformation?address=${address}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка получения баланса", error);
    });

  return res;
};

export const Header = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const isTransactionsPage = page === "transactions";
  const [balance, setBalance] = useState<string | number>(0);
  const [updateBalance, setUpdateBalance] = useState(false);

  const wallet = useTonWallet();
  const address = useTonAddress();

  useEffect(() => {
    (async () => {
      if (wallet?.account?.address) {
        const info = await getBalance(wallet?.account?.address);
        setBalance(info?.result?.balance);
      }
    })();
  }, [wallet?.account?.address, updateBalance]);

  return (
    <header
      className={clsx(
        "flex items-center w-full py-3 gap-4 h-[10%]",
        isTransactionsPage ? "justify-between" : "justify-end"
      )}
    >
      {isTransactionsPage && (
        <Link href="/wallet">
          <IconArrowBackUp />
        </Link>
      )}

      {address ? (
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-3">
            <p>Balance: {parseFloat(balance as string) / 1e9} TON</p>
            <button onClick={() => setUpdateBalance(!updateBalance)}>
              <IconReload />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src={(wallet as any)?.imageUrl}
              alt="tonkeeper"
              width={32}
              height={32}
            />
            <TonConnectButton />
          </div>
        </div>
      ) : (
        <TonConnectButton />
      )}
    </header>
  );
};
