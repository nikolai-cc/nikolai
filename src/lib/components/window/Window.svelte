<script>
	import { createEventDispatcher } from 'svelte';
	import transform from 'svelte-transform';
	import { slide, scale } from 'svelte/transition';
	import Titlebar from './Titlebar.svelte';

	export let title;
	export let content = true;

	export let width = 200;
	export let height = 200;
	export let x = 16;
	export let y = 16;

	const dispatch = createEventDispatcher();

	let updateTransform = (e) => {
		x = e.detail.pos.x || x;
		y = e.detail.pos.y || y;
		width = e.detail.size?.width || width;
		height = e.detail.size?.height || height;
	};
</script>

<article
	transition:scale
	use:transform={{ pos: { x, y }, size: { width, height } }}
	on:drag:delta={(e) => {
		updateTransform(e);
		dispatch('delta', e.detail);
	}}
	on:resize:delta={(e) => {
		updateTransform(e);
		dispatch('delta', e.detail);
	}}
	class:large={!content}
>
	<Titlebar on:yellow={() => (content = !content)}>
		{title}
	</Titlebar>
	{#if content}
		<main in:slide={{ delay: 300, duration: 500 }} out:slide>
			<slot />
		</main>
	{/if}
</article>

<style>
	article {
		background-color: var(--color-background);
		backdrop-filter: var(--blur);
		-webkit-backdrop-filter: var(--blur);
		color: var(--color-green);
		box-shadow: var(--shadow);

		border: 2px solid var(--color-grey);
		border-radius: var(--radius-outer);

		display: flex;
		flex-direction: column;

		min-height: 40px;
		min-width: 100px;

		max-width: 80%;
		padding: 2px;
		margin: 24px auto;
	}

	article.large {
		height: max-content !important;
	}

	@media (max-width: 600px) {
		article {
			transform: none !important;
			width: max-content !important;
			height: max-content !important;
		}
	}

	@media (min-width: 600px) {
		article {
			position: absolute;
		}
	}

	main {
		border-bottom-left-radius: var(--radius-outer);
		border-bottom-right-radius: var(--radius-outer);

		overflow-y: auto;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	main::-webkit-scrollbar {
		display: none;
	}
</style>
