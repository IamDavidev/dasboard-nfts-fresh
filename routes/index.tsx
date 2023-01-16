import { type HandlerContext, type Handlers, type PageProps } from '$fresh/server.ts';
import { type JSX } from 'preact';

import { nftsApiHandler } from '~lib/api/nfts.api.ts';
import { IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';
import { ImageHeader } from '../components/ImageHeader.component.tsx';
import { PageLayoutWrapper } from '../components/PageLayoutWrapper.component.tsx';
import { randomPosition } from '~lib/utils/randomPositionList.ts';

const ownerExample = '0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c';

export const handler: Handlers = {
	async GET(_request: Request, ctx: HandlerContext): Promise<Response> {
		const nfts = await nftsApiHandler({
			limit: 10,
			owner: ownerExample,
		}) as IAdapterNFT[];
		return ctx.render({
			nfts,
		});
	},
};

export default function Home(props: PageProps): JSX.Element {
	const nftsList = props.data.nfts as IAdapterNFT[];
	const nft: IAdapterNFT = nftsList[randomPosition(nftsList.length)];

	return (
		<>
			<PageLayoutWrapper title='NFreshT'>
				<header class='flex justify-center flex-row items-center'>
					<div class='flex flex-col gap-4'>
						<h1 className='text-white text-7xl font-bold max-w-[600px]'>
							Discover & Collect
							<span class='text-yellow-400'>
								{' '}Super Rare {' '}
							</span>
							Digital Artworks
						</h1>
						<p class='max-w-[500px]'>
							The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the
							creator, made possible by blockchain technology
						</p>
						<div class='mt-8'>
							<a
								href='/dashboard'
								class='text-white px-12 py-4 rounded-3xl mr-4 text-xl font-bold'
								style={{
									background: 'linear-gradient(60deg,#3633D0 0%,#89C6FF 100%)',
								}}
							>
								Let's explore
							</a>
							<a
								href='/dashboard'
								class='text-white border-blue-700 border border-solid px-12 py-4 rounded-3xl text-xl font-bold'
							>
								Sell NFT
							</a>
						</div>
					</div>
					<ImageHeader
						src={nft.image}
						alt={nft.name}
						class={'w-80 h-96 object-cover rounded-3xl mx-auto'}
					/>
				</header>
			</PageLayoutWrapper>
		</>
	);
}
