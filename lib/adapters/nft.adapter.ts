import { type OwnedNft } from 'npm:alchemy-sdk';

import { type IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';
import { resolvePathIpfs } from '~lib/utils/resolvePathIpfs.util.ts';

export function adapterNFTs(nft: OwnedNft): IAdapterNFT {
  return {
    name: nft.title || 'NFTDeCoDeD',
    balance: nft.balance,
    image: resolvePathIpfs(nft.rawMetadata?.image),
    contract: nft.contract.address,
    id: nft.tokenId,
    uri: nft.tokenUri?.gateway,
    price: nft.contract.openSea?.floorPrice,
  };
}
