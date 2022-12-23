import { Head } from '$fresh/runtime.ts';
import 'https://deno.land/std@0.145.0/dotenv/load.ts';
import { type ComponentChildren, type FunctionalComponent, type JSX } from 'preact';
import { Navbar } from './Navbar.component.tsx';

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
					{title} + {'NFrehT'}
				</title>
			</Head>
			<div class='bg-black min-h-screen max-w-screen-2xl mx-auto overflow-hidden text-white font-sans font-bold'>
				<Navbar />
				<main class='p-20'>
					{children}
				</main>
			</div>
		</>
	);
};
