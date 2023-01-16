import { type OwnedNft, type OwnedNftsResponse } from 'npm:alchemy-sdk';
import { alchemyClient } from '~lib/clients/alchemy.client.ts';

interface IGetNFTs {
  nfts: OwnedNft[];
  count: number;
  pageKey?: string | undefined;
}
export interface IPropsGetNFTs {
  limit?: number;
  owner: string;
}

export async function getNFTs({
  owner,
  limit,
}: IPropsGetNFTs): Promise<IGetNFTs> {
  const response: OwnedNftsResponse = await alchemyClient.nft.getNftsForOwner(
    owner,
    {
      pageSize: limit,
    }
  );
  console.info('🚀 ~>  file: getNFTsAll.service.ts:25 ~>  response', response);

  return {
    nfts: response.ownedNfts,
    count: response.totalCount,
    pageKey: response.pageKey,
  };
}
