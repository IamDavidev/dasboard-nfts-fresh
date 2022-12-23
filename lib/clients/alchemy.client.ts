import { Alchemy, type AlchemySettings, Network } from 'npm:alchemy-sdk';

const settings: AlchemySettings = {
  apiKey: Deno.env.get('ALCHEMY_API_KEY'),
  network: Network.ETH_MAINNET,
};

export const alchemyClient = new Alchemy(settings);
