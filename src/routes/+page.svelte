<script lang="ts">
	import { loadStories, pageSize } from '~/utils/loadStories'
	import type { PageData } from './$types'
	import Main from '~/components/Main.svelte'

	export let data: PageData

	let stories = data.initialStories
	let isLoadingMoreStories = false
	let pageValue = 0

	const loadMoreStories = async () => {
		isLoadingMoreStories = true

		stories = stories.concat(await loadStories(data.topStoriesIds, pageValue + pageSize))

		pageValue += pageSize

		isLoadingMoreStories = false
	}
</script>

<svelte:head>
	<title>Tech News</title>
</svelte:head>
<div>
	<Main {stories} {isLoadingMoreStories} on:loadMoreStories={loadMoreStories} />
</div>
