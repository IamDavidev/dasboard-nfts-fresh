import { type FunctionalComponent, type JSX } from 'preact';

import { BinanceIcon } from './icons/Binance.icon.tsx';
import { CoinbaseIcon } from './icons/Coinbase.icon.tsx';
import { MetamaskIcon } from './icons/Metamask.icon.tsx';

interface IImageHeaderProps {
	src: string | undefined;
	alt: string;
	class?: string;
}

export const VIDEO_FORMATS = {
	MP4: 'mp4',
	WEBM: 'webm',
};

export const ImgAdapter: FunctionalComponent<IImageHeaderProps> = ({
	alt,
	src,
	class: className,
}): JSX.Element => {
	// change for image generator
	if (!src) return <></>;

	if (src.includes(VIDEO_FORMATS.MP4) || src.includes(VIDEO_FORMATS.WEBM)) {
		return (
			<video class={className} loop muted>
				<source src={src} type='video/mp4' />
			</video>
		);
	}

	return <img src={src} alt={alt} class={className} />;
};

export const ImageHeader: FunctionalComponent<IImageHeaderProps> = ({
	src,
	alt,
	class: className,
}: IImageHeaderProps): JSX.Element => {
	return (
		<div class='relative min-w-[650px]'>
			<picture class='w-full'>
				<span class='block w-full h-full'>
					<ImgAdapter src={src} alt={alt} class={className} />
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
