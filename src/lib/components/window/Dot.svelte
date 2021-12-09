<script>
	export let color = 'var(--color-red)';
	export let highlight = 'var(--color-red-light)';
	export let lowlight = 'var(--color-red-dark)';
	export let size = 8;
	export let action = () => console.log('no action defined');
</script>

<button
	style="
        --color: {color};
        --highlight: {highlight};
        --lowlight: {lowlight};
        --size: {size}px;
    "
	on:click|stopPropagation={action}
/>

<style>
	button {
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		margin: 4px;
		background-color: var(--color);
		border: 1px solid var(--highlight);
		cursor: pointer;
	}

	button:hover {
		background-color: var(--highlight);
	}

	button:active {
		border: 1px solid var(--color);
		background-color: var(--lowlight);
	}
</style>
