import { error } from '@sveltejs/kit'
import type {PostFileContent} from '$lib/types';
import type {PageLoad} from './$types';


export const load:PageLoad = async ({params})=>{
	try {
		console.log(params)
		const post: PostFileContent = await import(`../../../tales/${params.tales}.txt?raw`)

		return {
			content: post.default
		}
	} catch (e) {
		throw error(404, `Could not find ${params.tales}`)
	}
}

