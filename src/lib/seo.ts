// import { NextSeo } from 'next-seo';
// import { useRouter } from 'next/router';

// import type { ComponentProps } from 'react';

// export function useSeoProps(
// 	props: Partial<ComponentProps<typeof NextSeo>> = {},
// ): Partial<ComponentProps<typeof NextSeo>> {
// 	const router = useRouter();

// 	const title = 'Xiangyi ─ developer';
// 	const description = "Hey 👋 I'm Xiangyi, a developer";

// 	return {
// 		title,
// 		description,
// 		canonical: `https://xiangyikong.com/${router.asPath}`,
// 		openGraph: {
// 			title,
// 			description,
// 			site_name: 'Xiangyi Kong',
// 			url: `https://xiangyikong.com/${router.asPath}`,
// 			type: 'website',
// 			images: [
// 				{
// 					url: 'https://xiangyikong.com/banner.png',
// 					alt: description,
// 					width: 1280,
// 					height: 720,
// 				},
// 			],
// 		},
// 		// twitter: {
// 		// 	cardType: 'summary_large_image',
// 		// 	handle: '@nurodev',
// 		// 	site: '@nurodev',
// 		// },
// 		...props,
// 	};
// }

// import { DeepPartial } from 'utility-types';  // Or define DeepPartial yourself if you prefer
import { useRouter } from 'next/router';
import { ComponentProps } from 'react';
import { NextSeo } from 'next-seo';
import { DEFAULT_SEO } from './seoConfig'; // Importing from the configuration file


type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };
  

  export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
	dynamicTitle?: string,
	dynamicDescription?: string,
  ): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();
  
	const title = dynamicTitle || DEFAULT_SEO.title;
	const description = dynamicDescription || DEFAULT_SEO.description;
  
	const canonicalUrl = `https://xiangyikong.com${router.asPath}`;
  
	return {
	  title,
	  description,
	  canonical: canonicalUrl,
	  openGraph: {
		title,
		description,
		site_name: DEFAULT_SEO.site_name,
		url: canonicalUrl,
		type: 'website',
		locale: DEFAULT_SEO.locale,
		images: [
		  {
			url: `${canonicalUrl}/banner.png`,
			alt: description,
			width: 1280,
			height: 720,
		  },
		],
	  },
	  additionalMetaTags: [
		{
		  name: 'keywords',
		  content: DEFAULT_SEO.keywords,
		},
		{
		  name: 'author',
		  content: DEFAULT_SEO.author,
		},
	  ],
	//   metaTags: { // Not native to next-seo; may need custom handling
	// 	keywords: DEFAULT_SEO.keywords,
	// 	author: DEFAULT_SEO.author,
	//   },
	  ...props,
	};
  }

// export function useSeoProps(
//   props: DeepPartial<ComponentProps<typeof NextSeo>> = {}
// ): DeepPartial<ComponentProps<typeof NextSeo>> {
//   const router = useRouter();

//   return {
//     title: DEFAULT_SEO.title,
//     description: DEFAULT_SEO.description,
//     canonical: `https://xiangyikong.com${router.asPath}`,
//     openGraph: {
//       title: DEFAULT_SEO.title,
//       description: DEFAULT_SEO.description,
//       site_name: DEFAULT_SEO.site_name,
//       url: `https://xiangyikong.com${router.asPath}`,
//       type: 'website',
//       images: [DEFAULT_SEO.banner],
//     },
//     // twitter: {
//     //  cardType: 'summary_large_image',
//     //  handle: '@handle',
//     //  site: '@site',
//     // },
//     ...props,
//   };
// }

