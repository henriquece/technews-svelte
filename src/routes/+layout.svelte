<script lang="ts">
	import Header from '../components/Header.svelte'
</script>

<Header />
<slot />

<style>
	:root {
		--color-background: #0e1217;
		--color-background-soft: #1c1f26;
		--color-border: #a8b3cf33;
		--color-border-hover: #a8b3cf66;
		--color-text-primary: #ffffff;
		--color-text-secondary: #a8b3cf;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		position: relative;
		font-weight: normal;
	}

	:global(body) {
		min-height: 100vh;
		background: var(--color-background);
		line-height: 1.6;
		font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
