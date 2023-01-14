import { PageLayoutWrapper } from '../components/PageLayoutWrapper.component.tsx';
import { type FunctionalComponent, type JSX } from 'preact';

const Dasboard: FunctionalComponent = (): JSX.Element => {
	return (
		<div>
			<PageLayoutWrapper title='/dashboard'>
				<div>
					<h2>
						Popular NFT’s Live Auction
					</h2>
				</div>
			</PageLayoutWrapper>
		</div>
	);
};

export default Dasboard;
