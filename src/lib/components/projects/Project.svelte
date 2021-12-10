<script>
	export let image;
	export let name;
	export let url;
</script>

<div class="project" style="--img: url('/{image}')">
	<div class="content">
		<a href={url}>{name}</a>
	</div>
</div>

<style>
	.project {
		max-width: calc(50% - 16px);
		max-height: 300px;
		aspect-ratio: 1;
		width: 100%;
		background-color: var(--color-background);
		background-image: var(--img);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.project:hover {
		background-image: none;
	}

	.project:hover > .content {
		opacity: 1;
	}

	.content {
		opacity: 0;
	}
</style>
