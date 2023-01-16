import { PageLayoutWrapper } from '../components/PageLayoutWrapper.component.tsx';
import { type FunctionalComponent, type JSX } from 'preact';
import { type Handlers, type PageProps } from '$fresh/server.ts';
// import { nftsApiHandler } from '~lib/api/nfts.api.ts';
import { alchemyClient } from '~lib/clients/alchemy.client.ts';
import { apiNftsForContractHandler } from '../lib/api/nftsForContract.api.ts';
import { IAdapterNFT } from '../lib/interfaces/AdapterNFT.interface.ts';

export const handler: Handlers = {
	async GET(_req, ctx) {
		const nfts = await apiNftsForContractHandler(
			{
				contract: '0x354634c4621cdfb7a25e6486cca1e019777d841b',
				limit: 10,
			},
		);

		return ctx.render({
			nfts,
		});
	},
};

const Dasboard: FunctionalComponent<PageProps> = ({ data }): JSX.Element => {
	const nfts = data.nfts;

	return (
		<div>
			<PageLayoutWrapper title='dashboard'>
				<div>
					<h2 class='text-5xl'>
						Popular NFT’s Live Auction
					</h2>
				</div>
				<div>
					{nfts.map((nft: IAdapterNFT) => {
						return (
							<div>
								<img src={nft.image} alt={nft.name} class='w-96' />
							</div>
						);
					})}
				</div>
			</PageLayoutWrapper>
		</div>
	);
};

export function NFTPopular(): JSX.Element {
	return (
		<article>
			<img src='' alt='' />
			<div>
				<button>Place A Bid</button>
			</div>
		</article>
	);
}

export default Dasboard;
