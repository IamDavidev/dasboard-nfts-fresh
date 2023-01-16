import { type PageProps } from '$fresh/server.ts';
import { FunctionalComponent, JSX } from 'preact';
import { PageLayoutWrapper } from '../components/PageLayoutWrapper.component.tsx';

const MarketplacePage: FunctionalComponent<PageProps> = (props): JSX.Element => {
	console.info('🚀 ~>  file: marketplace.tsx:16 ~>  props', props.data);
	return (
		<PageLayoutWrapper title='Markteplace'>
			<h2 className='text-center text-5xl'>
				Explore Marketplace
			</h2>
		</PageLayoutWrapper>
	);
};

export default MarketplacePage;
