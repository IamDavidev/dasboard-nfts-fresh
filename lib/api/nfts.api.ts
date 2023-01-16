import { type IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';

import { adapterNFTs } from '~lib/adapters/nft.adapter.ts';
import { getNFTs } from '~lib/services/getNFTsAll.service.ts';

interface IPropsNftApi {
  limit?: number;
  owner: string;
}

export async function nftsApiHandler({
  limit = 15,
  owner,
}: IPropsNftApi): Promise<IAdapterNFT[]> {
  const { nfts } = await getNFTs({
    limit,
    owner,
  });

  return nfts.map(adapterNFTs);
}
