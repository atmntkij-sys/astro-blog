// src/content.config.ts (위치 주의! src 폴더 바로 아래입니다)
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 최신 버전용 로더 추가

const blog = defineCollection({
	// 구형 'content' 타입 대신 'loader'를 사용합니다.
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };

