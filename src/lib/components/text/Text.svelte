<script>
	import Window from '$lib/components/window/Window.svelte';
	export let title = 'new document';
</script>

<Window title="{title}.txt" {...$$props}>
	<div class="content">
		<slot />
	</div>
</Window>

<style>
	.content {
		padding: 1em;
	}
</style>
