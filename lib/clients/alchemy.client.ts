import { Alchemy, type AlchemySettings, Network } from 'npm:alchemy-sdk';

const settings: AlchemySettings = {
  apiKey: '',
  network: Network.ETH_MAINNET,
};

export const alchemyClient = new Alchemy(settings);
