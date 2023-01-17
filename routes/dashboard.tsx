import { type FunctionalComponent, type JSX } from 'preact';
import { type HandlerContext, type Handlers, type PageProps } from '$fresh/server.ts';

import { PageLayoutWrapper } from '../components/PageLayoutWrapper.component.tsx';

import { apiNftsForContractHandler } from '~lib/api/nftsForContract.api.ts';
import { type IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';
import { randomMaxTime, randomMinTime } from '../lib/utils/randomTime.util.ts';

export const handler: Handlers = {
	async GET(_req: Request, ctx: HandlerContext): Promise<Response> {
		const nftsPopular: IAdapterNFT[] = await apiNftsForContractHandler(
			{
				contract: '0x354634c4621cdfb7a25e6486cca1e019777d841b',
				limit: 2,
			},
		);

		const ntfsHotBids: IAdapterNFT[] = await apiNftsForContractHandler(
			{
				contract: '0x7fa162d3d44fE8d30E344cc000493Da7CB6C6fbB',
				limit: 4,
			},
		);

		return ctx.render({
			nftsPopular,
			ntfsHotBids,
		});
	},
};

const Dasboard: FunctionalComponent<PageProps> = ({ data }: PageProps): JSX.Element => {
	const nftsPopular: IAdapterNFT[] = data.nftsPopular;
	const nftsHotBids: IAdapterNFT[] = data.ntfsHotBids;

	return (
		<div>
			<PageLayoutWrapper title='dashboard'>
				<section>
					<h2 class='text-5xl mb-8'>
						Popular NFT’s Live Auction
					</h2>
					<div class='flex gap-6'>
						{nftsPopular.map((nft: IAdapterNFT): JSX.Element => {
							return <NFTPopular src={nft.image || ''} name={nft.name} price={nft.price || 0.9} />;
						})}
					</div>
				</section>
				<section></section>
				<section class='my-12'>
					<h2 class='text-5xl mb-8'>
						🔥 Hot Bids
					</h2>
					<div class='flex flex-wrap gap-6'>
						{nftsHotBids.map((nft: IAdapterNFT): JSX.Element => {
							return (
								<div class='w-[209px] h-[196px] rounded-2xl'>
									<div class='w-full flex justify-between items-center'>
										<span class='text-white text-sm bg-blue-900 px-4 py-2 rounded-t-2xl'>
											{randomMinTime()}h:{randomMaxTime()}m:{randomMaxTime()}s
										</span>
										<span class='text-[#89C6FF]'>
											0.{randomMaxTime()} ETH
										</span>
									</div>
									<img
										src={nft.thumbnail}
										alt={nft.name}
										class='w-full h-full rounded-bl-2xl rounded-tr-2xl object-cover'
									/>
									<div class='w-full flex justify-end items-center '>
										<span class='text-white text-[12px] px-2 bg-blue-900 rounded-b-2xl'>
											{nft.name}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</PageLayoutWrapper>
		</div>
	);
};

export interface IPropsNFTPopular {
	src: string;
	name: string;
	price: string | number;
}

export function NFTPopular({ src, name, price }: IPropsNFTPopular): JSX.Element {
	return (
		<article class='relative border border-solid border-[#06B6D4] rounded-2xl'>
			<img src={src} alt={name} class='w-[440px] h-[250px] object-cover rounded-2xl' />
			<section class='absolute bottom-4 left-4 bg-[#0000006e] text-white rounded p-2'>
				<div class='flex gap-4 justify-between items-center w-full mt-4 mb-4'>
					<div class='flex flex-col justify-center items-center'>
						<span>
							18h:17m:29s
						</span>
						<span>
							Time Remaining
						</span>
					</div>
					<div class='flex flex-col justify-center items-center'>
						<span>
							{price} ETH
						</span>
						<span>
							Highest Bid
						</span>
					</div>
				</div>
				<button class='bg-[#161a42cc] rounded px-6 py-1 border border-solid border-[#06B6D4] w-full'>
					<span class='text-white text-base '>
						Place A Bid
					</span>
				</button>
			</section>
		</article>
	);
}

export default Dasboard;
/*
		<div class='mx-auto'>
					{nfts.map((nft: IAdapterNFT) => {
						if (nft.thumbnail !== undefined) {
							return (
								<div class='inline-flex'>
									<img src={nft.thumbnail} alt={nft.name} class='w-[196px] object-cover rounded-2xl m-4 inline-flex ' />
								</div>
							);
						}
						return (
							<div>
								<img src={nft.image} alt={nft.name} class='w-96' />
							</div>
						);
					})}
				</div>

*/
