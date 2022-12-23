import { FunctionalComponent, JSX } from 'preact';

interface IImageProps {
	src: string | undefined;
	alt: string;
	class: string;
}

export const Image: FunctionalComponent<{
	src: string | undefined;
	alt: string;
	class: string;
}> = ({ src, ...props }: IImageProps): JSX.Element => {
	if (!src) {
		return (
			<span>
				No Image
			</span>
		);
	}

	if (src.includes('.mp4')) {
		return (
			<video {...props}>
				<source src={src} type='video/mp4' />
				<source src={src.replace('.mp4', '.webm')} type='video/webm' />
			</video>
		);
	}

	return <img src={src} {...props} />;
};
