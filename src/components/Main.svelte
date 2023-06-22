<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import type { Story } from '~/services/hackerNews'
	import type { StoryWithVisibility } from '~/components/NewsCard.svelte'
	import TextField from '~/components/commons/TextField.svelte'
	import NewsCard from '~/components/NewsCard.svelte'
	import Button from '~/components/commons/Button.svelte'

	export let stories: Story[]
	export let isLoadingMoreStories: boolean

	const dispatch = createEventDispatcher()

	let filterValue = ''

	$: storiesWithVisibility = stories.map((story) => ({
		...story,
		isVisible: story.title.toLowerCase().includes(filterValue.toLowerCase())
	})) as StoryWithVisibility[]
</script>

<main>
	<div class="filter-textfield-wrapper">
		<TextField bind:value={filterValue} placeholder="Filter articles" />
	</div>
	<div class="news-cards">
		{#each storiesWithVisibility as story (story.id)}
			<NewsCard {story} />
		{/each}
	</div>
	<Button
		label="Load more"
		loading={isLoadingMoreStories}
		on:click={() => dispatch('loadMoreStories')}
	/>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 32px;
		padding: 36px 8px 36px;
	}

	.filter-textfield-wrapper {
		width: 100%;
		padding: 0px 8px;
		align-self: flex-start;
	}

	.news-cards {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		row-gap: 16px;
	}
</style>
