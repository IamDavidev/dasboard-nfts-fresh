import { asset } from '$fresh/runtime.ts';
import { type FunctionalComponent, type JSX } from 'preact';

export const Navbar: FunctionalComponent = (): JSX.Element => {
	return (
		<nav class='px-20 py-8 flex flex-row justify-between'>
			<ul class='flex flex-row gap-8'>
				<li>Marquetplace</li>
				<li>Creators</li>
				<li>Community</li>
			</ul>
			<img src={asset('logo.svg')} alt={'logo fresh'} />
			<button class='text-white border border-blue-400 border-solid rounded-2xl px-6 py-2 hover:bg-blue-400 transition-all duration-500'>
				Connect Wallet
			</button>
		</nav>
	);
};
