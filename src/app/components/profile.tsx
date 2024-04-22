"use client";

import { useAccount, useBalance, useEnsName } from "wagmi";
import { middleEllipsis } from "@/lib/utils";
import { formatUnits } from "viem";

export default function Profile() {
  const { address, chain } = useAccount();

  const { data } = useBalance({
    address,
  });

  const ens = useEnsName({
    address,
  });

  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Wallet address</h2>
        <p className="m-0 w-[30ch] text-sm opacity-50">
          {middleEllipsis(address as string, 12) || ""}
        </p>
      </div>

      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Network</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {chain?.name || ""}
        </p>
      </div>

      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Balance</h2>
        <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {data ? (
            <p>
              {Number(formatUnits(data.value, data.decimals)).toFixed(4)}{" "}
              {data.symbol}
            </p>
          ) : (
            <div />
          )}
        </div>
      </div>

      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>EnsName</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          {ens.data || ""}
        </p>
      </div>
    </div>
  );
};