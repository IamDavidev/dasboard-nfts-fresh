export interface IAdapterNFT {
  name: string;
  image: string | undefined;
  contract: string;
  id: string;
  uri?: string | undefined;
  price?: number | undefined;
}
