import { asset, Head } from '$fresh/runtime.ts';
import { type ComponentChildren, type FunctionalComponent, type JSX } from 'preact';
import { Navbar } from './Navbar.component.tsx';
import 'https://deno.land/std@0.145.0/dotenv/load.ts';

export interface IPropsPageLayout {
	children: ComponentChildren;
	title: string;
}

export const PageLayoutWrapper: FunctionalComponent<
	IPropsPageLayout
> = (
	{ children, title }: IPropsPageLayout,
): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					{title}
				</title>
			</Head>
			<div class='bg-black min-h-screen max-w-screen-2xl mx-auto overflow-hidden text-white font-bold'>
				<Navbar />
				<time>
					{Deno.env.get('TEST')}
				</time>
				<main class='p-20'>
					{children}
				</main>
			</div>
		</>
	);
};
