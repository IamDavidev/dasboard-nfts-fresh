import { asset } from '$fresh/runtime.ts';
import { type ComponentChildren, type FunctionalComponent, type JSX } from 'preact';

export interface IPropsPageLayout {
	children: ComponentChildren;
	title: string;
}

export const Navbar: FunctionalComponent = (): JSX.Element => {
	return (
		<nav>
			<ul>
				<li>Marquetplace</li>
				<li>Creators</li>
				<li>Community</li>
			</ul>
			<div>
				<img src={asset('logo.svg')} alt={'logo fresh'} />
			</div>
			<button>
				Connect Wallet
			</button>
		</nav>
	);
};
