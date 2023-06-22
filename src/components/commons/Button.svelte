<script lang="ts">
	export let label: string
	export let loading: boolean
</script>

<button on:click>
	{#if loading}
		<div class="center-dots">.</div>
	{:else}
		{label}
	{/if}
</button>

<style scoped>
	button {
		width: 112px;
		height: 32px;
		border: none;
		border-radius: 12px;
		background-color: #ffffff;
		font-size: 16px;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
		transition: 0.1s;
	}

	@keyframes dots {
		0%,
		20% {
			color: #ffffff;
			text-shadow: 12px 0 0 #ffffff, 24px 0 0 #ffffff;
		}

		40% {
			color: var(--color-background-soft);
			text-shadow: 12px 0 0 #ffffff, 24px 0 0 #ffffff;
		}

		60% {
			text-shadow: 12px 0 0 var(--color-background-soft), 24px 0 0 #ffffff;
		}

		80%,
		100% {
			text-shadow: 12px 0 0 var(--color-background-soft), 24px 0 0 var(--color-background-soft);
		}
	}

	.center-dots {
		animation: dots 1s steps(5, end) infinite;
		font-size: 32px;
		line-height: 32px;
		transform: translate(-12px, -9px);
	}
</style>
