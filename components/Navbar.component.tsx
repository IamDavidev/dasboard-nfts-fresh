import { asset } from '$fresh/runtime.ts';
import { type FunctionalComponent, type JSX } from 'preact';

export const Navbar: FunctionalComponent = (): JSX.Element => {
	return (
		<nav class='px-20 py-8 flex flex-row justify-between'>
			<ul class='flex flex-row gap-8'>
				<li>
					<a href='/' class=''>
						Marquetplace
					</a>
				</li>
				<li>
					<a href='/' class=''>
						Creators
					</a>
				</li>
				<li>
					<a href='/' class=''>
						Community
					</a>
				</li>
			</ul>
			<a href='/'>
				<img src={asset('logo.svg')} alt={'logo fresh'} />
			</a>
			<button class='text-white border border-blue-400 border-solid rounded-2xl px-6 py-2 hover:bg-blue-400 transition-all duration-500'>
				Connect Wallet
			</button>
		</nav>
	);
};
