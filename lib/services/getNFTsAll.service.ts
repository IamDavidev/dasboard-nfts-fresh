import { alchemyClient } from '~lib/clients/alchemy.client.ts';
import { type OwnedNftsResponse, type OwnedNft } from 'npm:alchemy-sdk';

const ownerExample = '0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c';

interface IGetNFTs {
  nfts: OwnedNft[];
  count: number;
  pageKey?: string | undefined;
}

export async function getNFTs(limit: number): Promise<IGetNFTs> {
  const response: OwnedNftsResponse = await alchemyClient.nft.getNftsForOwner(
    ownerExample,
    {
      pageSize: limit,
    }
  );

  return {
    nfts: response.ownedNfts,
    count: response.totalCount,
    pageKey: response.pageKey,
  };
}
