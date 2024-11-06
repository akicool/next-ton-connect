"use client";
import {
  SendTransactionRequest,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {};

export const Transactions = (props: Props) => {
  const [tonConnectUI] = useTonConnectUI();

  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const transaction: SendTransactionRequest = {
    validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
    messages: [
      {
        address,
        amount,
      },
    ],
  };

  // useEffect(() => {
  //   tonConnectUI.onStatusChange((wallet) => {
  //     if (
  //       wallet?.connectItems?.tonProof &&
  //       "proof" in wallet?.connectItems.tonProof
  //     ) {
  //       console.log(wallet);

  //       // checkProofInYourBackend(
  //       //   wallet.connectItems.tonProof.proof,
  //       //   wallet.account.address
  //       // );
  //     }
  //   });
  // }, [tonConnectUI]);

  return (
    <div className=" h-[90%]">
      <h1 className="h-[10%] text-3xl mb-10">Transaction Page</h1>

      <div className=" w-full h-[80%] grid place-items-center">
        <div className=" flex flex-col gap-2 items-center max-w-96 w-full">
          <input
            type="text"
            value={address}
            onChange={handleChangeAddress}
            placeholder="Address"
            className="text-black w-full"
          />

          <input
            type="text"
            value={amount}
            onChange={handleChangeAmount}
            placeholder="Amount"
            className="text-black w-full"
          />

          <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
            Send transaction
          </button>
        </div>
      </div>
    </div>
  );
};
