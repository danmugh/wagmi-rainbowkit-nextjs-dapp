'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { sepolia, bscTestnet, blastSepolia } from 'wagmi/chains';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = "yut2f2j99u8mbtw3";

const supportedChains: Chain[] = [ sepolia, bscTestnet, blastSepolia ];

export const config = getDefaultConfig({
   appName: "WalletConnection",
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });