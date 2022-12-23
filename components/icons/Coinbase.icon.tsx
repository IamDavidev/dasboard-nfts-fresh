import type { FunctionalComponent, JSX } from 'preact';
import type { IIconProps } from '~lib/interfaces/IconProps.interface.ts';

export const CoinbaseIcon: FunctionalComponent<IIconProps> = ({
	color,
	class: className,
}: IIconProps): JSX.Element => {
	return (
		<svg width='153' class={className} height='29' viewBox='0 0 153 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_11_111)'>
				<path
					d='M31.2877 8.49217C25.7556 8.49217 21.433 12.6917 21.433 18.3137C21.433 23.9357 25.6464 28.0993 31.2877 28.0993C36.9291 28.0993 41.2157 23.8638 41.2157 18.2778C41.2157 12.7277 37.0023 8.49217 31.2877 8.49217ZM31.3251 24.0477C28.1747 24.0477 25.8662 21.6009 25.8662 18.3151C25.8662 14.9919 28.1374 12.5466 31.2877 12.5466C34.4754 12.5466 36.7825 15.0293 36.7825 18.3151C36.7825 21.6009 34.4754 24.0477 31.3251 24.0477ZM42.4239 12.765H45.172V27.7358H49.5678V8.85711H42.4239V12.765ZM10.3701 12.5452C12.6786 12.5452 14.5102 13.969 15.2056 16.0868H19.8585C19.0153 11.5596 15.2788 8.49217 10.4075 8.49217C4.87532 8.49217 0.552734 12.6917 0.552734 18.3151C0.552734 23.9385 4.76611 28.1007 10.4075 28.1007C15.1696 28.1007 18.9794 25.0333 19.8226 20.4688H15.2056C14.5462 22.5865 12.7146 24.0477 10.4061 24.0477C7.21839 24.0477 4.98452 21.6009 4.98452 18.3151C4.98591 14.9919 7.18383 12.5452 10.3701 12.5452ZM125.948 16.489L122.724 16.0149C121.186 15.7965 120.087 15.285 120.087 14.0796C120.087 12.765 121.516 12.1084 123.457 12.1084C125.581 12.1084 126.938 13.0207 127.231 14.5178H131.48C131.003 10.7205 128.072 8.49355 123.567 8.49355C118.914 8.49355 115.837 10.867 115.837 14.2261C115.837 17.4387 117.853 19.3021 121.918 19.8854L125.142 20.3596C126.718 20.578 127.597 21.2 127.597 22.3681C127.597 23.8652 126.058 24.4859 123.934 24.4859C121.332 24.4859 119.867 23.427 119.647 21.8207H115.324C115.728 25.5088 118.621 28.1007 123.896 28.1007C128.696 28.1007 131.882 25.9097 131.882 22.1483C131.882 18.7892 129.575 17.0364 125.948 16.489ZM47.3699 1.08005C45.7581 1.08005 44.5485 2.24813 44.5485 3.85441C44.5485 5.46069 45.7567 6.62877 47.3699 6.62877C48.9817 6.62877 50.1913 5.46069 50.1913 3.85441C50.1913 2.24813 48.9817 1.08005 47.3699 1.08005ZM111.881 15.3209C111.881 11.232 109.39 8.49355 104.115 8.49355C99.1331 8.49355 96.3491 11.0136 95.7989 14.8841H100.159C100.379 13.387 101.551 12.1457 104.042 12.1457C106.277 12.1457 107.376 13.1313 107.376 14.3367C107.376 15.9071 105.361 16.3079 102.87 16.5637C99.4994 16.9286 95.3234 18.0967 95.3234 22.4787C95.3234 25.8751 97.8517 28.0648 101.881 28.0648C105.032 28.0648 107.01 26.7501 107.999 24.6683C108.146 26.5304 109.538 27.7358 111.48 27.7358H114.044V23.8293H111.882V15.3209H111.881ZM107.558 20.0679C107.558 22.5879 105.361 24.4499 102.686 24.4499C101.037 24.4499 99.6446 23.756 99.6446 22.2962C99.6446 20.4342 101.88 19.9228 103.931 19.7043C105.909 19.5219 107.008 19.0837 107.558 18.2432V20.0679ZM84.2232 8.49217C81.7681 8.49217 79.7167 9.51511 78.2514 11.2306V0.897583H73.8556V27.7358H78.1782V25.2531C79.6434 27.0418 81.7322 28.1007 84.2232 28.1007C89.4982 28.1007 93.4918 23.9385 93.4918 18.3151C93.4918 12.6917 89.4249 8.49217 84.2232 8.49217ZM83.5638 24.0477C80.4134 24.0477 78.1049 21.6009 78.1049 18.3151C78.1049 15.0293 80.4494 12.5466 83.5997 12.5466C86.7874 12.5466 89.0213 14.9933 89.0213 18.3151C89.0213 21.6009 86.7141 24.0477 83.5638 24.0477ZM63.3415 8.49217C60.4842 8.49217 58.6153 9.66025 57.5163 11.3039V8.85711H53.1564V27.7344H57.5522V17.4746C57.5522 14.5897 59.3838 12.5452 62.0946 12.5452C64.6229 12.5452 66.1974 14.334 66.1974 16.9272V27.7358H70.5933V16.5996C70.5946 11.8513 68.141 8.49217 63.3415 8.49217ZM152.837 17.6944C152.837 12.2908 148.881 8.49355 143.568 8.49355C137.927 8.49355 133.787 12.7291 133.787 18.3151C133.787 24.1942 138.22 28.1007 143.642 28.1007C148.221 28.1007 151.811 25.3982 152.727 21.565H148.147C147.487 23.2445 145.876 24.1942 143.714 24.1942C140.892 24.1942 138.768 22.4414 138.292 19.374H152.836V17.6944H152.837ZM138.549 16.2333C139.246 13.6041 141.224 12.3268 143.495 12.3268C145.986 12.3268 147.891 13.7506 148.331 16.2333H138.549Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11_111'>
					<rect width='152.284' height='27.2031' fill='white' transform='translate(0.552734 0.897583)' />
				</clipPath>
			</defs>
		</svg>
	);
};