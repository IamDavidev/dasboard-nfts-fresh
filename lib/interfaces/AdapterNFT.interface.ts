export interface IAdapterNFT {
  /** Name : name of the NFT */
  name: string;
  /** Image : RAW image of the NFT */
  image: string | undefined;
  /** Contract : address of the contract */
  contract: string;
  /** Id : id of the NFT */
  id: string;
  /** Uri : uri of collection NFTS*/
  uri?: string | undefined;
  /** Price : price of the NFT */
  price?: number | undefined;
  /** THUMBNAIL : MINIMAL image */
  thumbnail?: string | undefined;
}
