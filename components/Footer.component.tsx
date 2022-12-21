import { asset } from '$fresh/runtime.ts';
import { type FunctionalComponent, type JSX } from 'preact';

export const Footer: FunctionalComponent = (): JSX.Element => {
	return (
		<footer>
			<img src={asset('logo.svg')} alt={'logo fresh'} />
		</footer>
	);
};
