import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Xiangyi ─ developer';
	const description = "Hey 👋 I'm Xiangyi, a developer";

	return {
		title,
		description,
		canonical: `https://xiangyikong.com/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Xiangyi Kong',
			url: `https://xiangyikong.com/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://xiangyikong.com/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		// twitter: {
		// 	cardType: 'summary_large_image',
		// 	handle: '@nurodev',
		// 	site: '@nurodev',
		// },
		...props,
	};
}
