import {json} from '@sveltejs/kit';

import type {Post} from '$lib/types';

async function getPosts(){
	const posts: Post[] = [];
	const paths = import.meta.glob('../../../tales/*.txt', {as: 'raw',eager: true});

	for (const path in paths){
		const content: string = paths[path];
		const slug = path.split('/').at(-1)?.replace('.txt', '')

		posts.push({content: content, slug: slug})
	}
	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
