<script lang="ts">
	export let value: string;
	export let placeholder: string;
</script>

<input {placeholder} bind:value />

<style>
	input {
		width: 100%;
		height: 38px;
		padding: 0px 16px;
		border: 1px solid var(--color-background-soft);
		border-radius: 12px;
		background-color: var(--color-background-soft);
		color: #ffffff;
		font-size: 18px;
		font-weight: 500;
		font-family: inherit;
		outline: none;
	}

	input:hover {
		border: 1px solid var(--color-border-hover);
	}

	input:focus-visible {
		border: 1px solid #ffffff;
	}
</style>
