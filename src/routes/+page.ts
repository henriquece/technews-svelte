import { getTopStories } from '~/services/hackerNews'
import { loadStories } from '~/utils/loadStories'
import type { PageLoad } from './$types'

export const load = (async () => {
	const { data: topStoriesIds } = await getTopStories()

	const initialStories = await loadStories(topStoriesIds, 0)

	return { topStoriesIds, initialStories }
}) satisfies PageLoad
