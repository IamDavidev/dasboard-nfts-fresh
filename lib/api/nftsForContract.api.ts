import { getNFTsForContract } from '~lib/services/getNFTsForContract.service.ts';
import { adapterNFTs } from '../adapters/nft.adapter.ts';

export interface IPropsApiNftsForContractHandler {
  contract: string;
  limit?: number;
}

export async function apiNftsForContractHandler({
  contract,
  limit,
}: IPropsApiNftsForContractHandler) {
  const { nfts } = await getNFTsForContract({
    contract,
    limit,
  });
  return nfts.map(adapterNFTs);
}
