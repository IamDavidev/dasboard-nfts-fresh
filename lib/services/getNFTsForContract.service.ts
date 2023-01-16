import { type NftContractNftsResponse, Nft } from 'npm:alchemy-sdk';
import { alchemyClient } from '~lib/clients/alchemy.client.ts';

export interface IGetNFTsForContract {
  nfts: Nft[];
  pageKey?: string | undefined;
}

export interface IPropsGetNFTsForContract {
  contract: string;
  limit?: number;
}

export async function getNFTsForContract({
  contract,
  limit,
}: IPropsGetNFTsForContract): Promise<IGetNFTsForContract> {
  const response: NftContractNftsResponse =
    await alchemyClient.nft.getNftsForContract(contract, {
      pageSize: limit || 15,
    });

  return {
    nfts: response.nfts,
    pageKey: response.pageKey,
  };
}
