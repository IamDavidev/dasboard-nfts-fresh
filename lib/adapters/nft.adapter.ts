import { type OwnedNft, type Nft } from 'npm:alchemy-sdk';

import { type IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';
import { resolvePathIpfs } from '~lib/utils/resolvePathIpfs.util.ts';

export function adapterNFTs(nft: OwnedNft | Nft): IAdapterNFT {
  return {
    name: nft.title || 'NFTDeCoDeD',
    image: resolvePathIpfs(nft.rawMetadata?.image),
    contract: nft.contract.address,
    id: nft.tokenId,
    uri: nft.tokenUri?.gateway,
    price: nft.contract.openSea?.floorPrice,
  };
}
