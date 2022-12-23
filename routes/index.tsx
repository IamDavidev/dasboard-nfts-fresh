import { type Handlers, type PageProps } from '$fresh/server.ts';
import { type FunctionalComponent, type JSX } from 'preact';

import { nftsApiHandler } from '~lib/api/nfts.api.ts';
import { IAdapterNFT } from '~lib/interfaces/AdapterNFT.interface.ts';
import { BinanceIcon } from '../components/icons/Binance.icon.tsx';
import { CoinbaseIcon } from '../components/icons/Coinbase.icon.tsx';
import { MetamaskIcon } from '../components/icons/Metamask.icon.tsx';
import { PageLayoutWrapper } from '../components/PageLayoutWrapper.component.tsx';

export const handler: Handlers = {
	async GET(_request: Request, ctx): Promise<Response> {
		const nfts = await nftsApiHandler({
			limit: 1,
		}) as IAdapterNFT[];
		return ctx.render({
			nfts,
		});
	},
};

export default function Home(props: PageProps): JSX.Element {
	const nft = props.data.nfts[0] as IAdapterNFT;
	return (
		<>
			<PageLayoutWrapper title='NFreshT'>
				<header class='flex justify-center flex-row items-start'>
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
						<div>
							<button
								class='text-white px-12 py-4 rounded-3xl mr-4 text-xl font-bold'
								style={{
									background: 'linear-gradient(60deg,#3633D0 0%,#89C6FF 100%)',
								}}
							>
								let's explore
							</button>
							<button class='text-white border-blue-700 border border-solid px-12 py-4 rounded-3xl text-xl font-bold'>
								sell NFT
							</button>
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

interface IImageHeaderProps {
	src: string | undefined;
	alt: string;
	class?: string;
}

export const ImageHeader: FunctionalComponent<IImageHeaderProps> = ({
	src,
	alt,
	class: className,
}: IImageHeaderProps): JSX.Element => {
	return (
		<div class='relative min-w-[650px]'>
			<picture class='w-full'>
				<span class='block w-full h-full'>
					<img src={src} alt={alt} class={className} />
				</span>
			</picture>
			<div
				class='flex flex-row gap-8 absolute -bottom-1 left-0 px-8 py-11 rounded-2xl border border-solid border-yellow-400'
				style={{
					background: 'linear-gradient(180deg, rgba(255,255, 255, .10) 0%, rgba(0, 0, 0, 0.10) 100%)',
					backdropFilter: 'blur(20px)',
				}}
			>
				<MetamaskIcon color={'white'} class={'w-48'} />
				<BinanceIcon color={'white'} class={'w-48'} />
				<CoinbaseIcon color={'white'} class={'w-48'} />
			</div>
		</div>
	);
};
