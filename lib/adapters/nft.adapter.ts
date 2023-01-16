import { type Nft, type OwnedNft } from 'npm:alchemy-sdk';

import { type IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';
import { resolvePathIpfs } from '~lib/utils/resolvePathIpfs.util.ts';

export const POSITION_NFT_INITIAL = 0;

export function adapterNFTs(nft: OwnedNft | Nft): IAdapterNFT {
  const image: string | undefined = resolvePathIpfs(nft.rawMetadata?.image);
  const thumbnail: string | undefined = resolvePathIpfs(
    nft.media[POSITION_NFT_INITIAL].thumbnail
  );

  return {
    name: nft.title || 'DavNFT - INCOGNITO',
    contract: nft.contract.address,
    id: nft.tokenId,
    uri: nft.tokenUri?.gateway,
    price: nft.contract.openSea?.floorPrice,
    image,
    thumbnail,
  };
}
