import type {EntryGenerator} from './$types';
export const entries: EntryGenerator  = () => {
	const filePaths = import.meta.glob('../../../tales/*.txt')
	const talesEntries = []
	for (const filePath in filePaths){
		console.log(filePath)
		talesEntries.push({
			tales: filePath.split('/').at(-1)?.replace('.txt','')?? '' //type scrupts complain string|undefined not allowed
		})
	}
	return talesEntries
}
export const prerender = true;
